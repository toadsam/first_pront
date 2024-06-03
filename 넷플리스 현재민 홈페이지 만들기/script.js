document.addEventListener('DOMContentLoaded', function () {
    // 로그인 상태 확인
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const playButtons = document.querySelectorAll('.play');
    const likeButtons = document.querySelectorAll('.like');
    const addToListButtons = document.querySelectorAll('.add-to-list');
    const myListItems = new Set(JSON.parse(localStorage.getItem('myListItems')) || []); // 찜한 콘텐츠 제목을 저장하는 Set

    // 영화 모달 관련 요소
    const modal = document.getElementById('movieModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalGenre = document.getElementById('modalGenre');
    const modalPlay = document.getElementById('modalPlay');
    const modalLike = document.getElementById('modalLike');
    const modalAddToList = document.getElementById('modalAddToList');
    const episodeList = document.getElementById('episodeList');
    const closeModal = document.getElementsByClassName('close')[0];

    // 모달 창 닫기 기능
    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    // 외부 클릭 시 모달 창 닫기
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    document.querySelectorAll('.movie').forEach(movie => {
        movie.addEventListener('click', function () {
            const title = movie.getAttribute('data-title');
            const genre = movie.getAttribute('data-genre');
            const url = movie.getAttribute('data-url');
            const image = movie.getAttribute('data-image');
            const episodes = JSON.parse(movie.getAttribute('data-episodes'));

            modalImage.src = image;
            modalTitle.textContent = title;
            modalGenre.textContent = genre;
            episodeList.innerHTML = '';

            episodes.forEach(episode => {
                const episodeDiv = document.createElement('div');
                episodeDiv.classList.add('episode');
                episodeDiv.innerHTML = `
                    <img src="${episode.image}" alt="${episode.title}">
                    <p>${episode.title}</p>
                    <p>${episode.description}</p>
                `;
                episodeList.appendChild(episodeDiv);
            });

            modalPlay.onclick = function () {
                alert('영화가 실행됩니다!');
                window.open(url, '_blank');
            }

            modalLike.classList.toggle('active', myListItems.has(`${title}|${image}`));

            modalLike.onclick = function () {
                modalLike.classList.toggle('active');
            }

            modalAddToList.onclick = function () {
                if (myListItems.has(`${title}|${image}`)) {
                    alert('이미 추가된 콘텐츠입니다.');
                } else {
                    myListItems.add(`${title}|${image}`);
                    localStorage.setItem('myListItems', JSON.stringify(Array.from(myListItems)));
                    alert('찜 리스트에 추가되었습니다.');
                }
            }

            modal.style.display = 'block';
        });
    });

    playButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const url = button.closest('.movie').getAttribute('data-url');
            alert('영화가 실행됩니다!');
            window.open(url, '_blank');
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            button.classList.toggle('active');
        });
    });

    addToListButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const title = button.closest('.movie').getAttribute('data-title');
            const image = button.closest('.movie').getAttribute('data-image');

            if (myListItems.has(`${title}|${image}`)) {
                alert('이미 추가된 콘텐츠입니다.');
                return;
            }

            myListItems.add(`${title}|${image}`);
            localStorage.setItem('myListItems', JSON.stringify(Array.from(myListItems)));
            alert('찜 리스트에 추가되었습니다.');
        });
    });

    const movies = document.querySelectorAll('.top10-grid .movie');
    const slider = document.querySelector('.top10-grid');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let currentIndex = 0;
    const itemsToShow = 4; // 화면에 표시할 항목 수
    const totalItems = movies.length;

    next.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }
    });
});
