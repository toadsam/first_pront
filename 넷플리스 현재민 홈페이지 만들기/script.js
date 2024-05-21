document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play');
    const likeButtons = document.querySelectorAll('.like');
    const addToListButtons = document.querySelectorAll('.add-to-list');
    const myListItems = new Set(JSON.parse(localStorage.getItem('myListItems')) || []); // 찜한 콘텐츠 제목을 저장하는 Set

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('영화가 실행됩니다!');
            const url = button.getAttribute('data-url');
            window.open(url, '_blank');
        });
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });

    addToListButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const image = button.getAttribute('data-image');

            // 이미 찜한 콘텐츠인지 확인
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
