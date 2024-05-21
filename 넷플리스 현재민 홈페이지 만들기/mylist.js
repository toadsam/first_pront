document.addEventListener('DOMContentLoaded', function () {
    const myListGrid = document.querySelector('#myListGrid');
    const myListItems = new Set(JSON.parse(localStorage.getItem('myListItems')) || []);

    // 만약 'myListItems'가 비어있다면, 초기 상태를 비워둠
    if (myListItems.size === 0) {
        myListGrid.innerHTML = '<p>찜한 콘텐츠가 없습니다.</p>';
        return;
    } else {
        myListGrid.innerHTML = ''; // 기존 메시지를 비움
    }

    myListItems.forEach(item => {
        const [title, image] = item.split('|');

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <div class="movie-content">
                <img src="${image}" alt="${title}">
                <div class="movie-info">
                    <button class="remove-button">X</button>
                    <div class="buttons">
                        <button class="play" data-url="https://www.youtube.com/watch?v=gJCCspSFI1c&t=1s">▶</button>
                        <button class="like"></button>
                    </div>
                    <p class="genre">드라마, 로맨스</p>
                </div>
            </div>
        `;

        myListGrid.appendChild(movieDiv);

        // 새로 추가된 영화에도 이벤트 리스너 추가
        movieDiv.querySelector('.play').addEventListener('click', () => {
            alert('영화가 실행됩니다!');
            const url = movieDiv.querySelector('.play').getAttribute('data-url');
            window.open(url, '_blank');
        });

        movieDiv.querySelector('.like').addEventListener('click', () => {
            movieDiv.querySelector('.like').classList.toggle('active');
        });

        movieDiv.querySelector('.remove-button').addEventListener('click', () => {
            myListItems.delete(`${title}|${image}`);
            localStorage.setItem('myListItems', JSON.stringify(Array.from(myListItems)));
            myListGrid.removeChild(movieDiv);
            if (myListItems.size === 0) {
                myListGrid.innerHTML = '<p>찜한 콘텐츠가 없습니다.</p>';
            }
            alert('찜 리스트에서 제거되었습니다.');
        });
    });
});
