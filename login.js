document.getElementById('btn-submit').addEventListener('click', function () {
    const email_value = document.getElementById('email').value;
    const pass_value = document.getElementById('password').value;
    if (email_value === 'samsularefin@gamil.com' && pass_value === '1234') {
        window.location.href = 'user_web_view.html';
    }
    else {
        alert('you entered a invalid pass or email!!');
        document.getElementById('password').value = '';
        document.getElementById('email').value = '';
    }
})