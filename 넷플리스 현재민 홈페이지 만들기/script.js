document.addEventListener('DOMContentLoaded', function () {
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
