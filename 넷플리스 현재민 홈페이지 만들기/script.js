
document.addEventListener('DOMContentLoaded', function () {
    const movies = document.querySelectorAll('.movie img');
    const slider = document.querySelector('.top10-grid');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let currentIndex = 0;

    movies.forEach(movie => {
        movie.addEventListener('mouseover', () => {
            movie.style.transform = 'scale(1.1)';
            movie.style.transition = 'transform 0.5s ease';
        });

        movie.addEventListener('mouseout', () => {
            movie.style.transform = 'scale(1)';
        });
    });

    // 영화 이미지 클릭 시 메시지 표시
    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            alert('이 영화를 재생합니다!');
        });
    });

    next.addEventListener('click', () => {
        if (currentIndex < movies.length - 5) {  // -5 to show 5 items at a time
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * 20}%)`;
        }
    });

    prev.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * 20}%)`;
        }
    });

    
});