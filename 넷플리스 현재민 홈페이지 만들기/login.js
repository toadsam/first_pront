document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 간단한 로그인 검증 (여기서는 예제로 username: 'a', password: 'a')
        if (username === 'a' && password === 'a') {
            localStorage.setItem('loggedIn', 'true');
            alert('로그인 성공!');
            window.location.href = 'np.html'; // 로그인 성공 시 메인 페이지로 이동
        } else {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    });
});