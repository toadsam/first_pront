
document.addEventListener('DOMContentLoaded', function () {
    const movies = document.querySelectorAll('.movie img');

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
});