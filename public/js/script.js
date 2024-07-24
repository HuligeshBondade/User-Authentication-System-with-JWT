document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
        alert('Registration successful');
        clearForm('register-form');
    } else {
        alert('Registration failed');
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        document.getElementById('forms').style.display = 'none';
        document.getElementById('token-form').style.display = 'block';
        clearForm('login-form');
    } else {
        alert('Login failed');
    }
});

document.getElementById('validate-token').addEventListener('click', async () => {
    const token = document.getElementById('token-input').value;
    const storedToken = localStorage.getItem('token');

    if (token === storedToken) {
        const response = await fetch('/api/auth/protected', {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        });

        if (response.ok) {
            document.getElementById('token-form').style.display = 'none';
            document.getElementById('protected-content').style.display = 'block';
            clearForm('token-form');
        } else {
            alert('Invalid token');
        }
    } else {
        alert('Invalid token');
    }
});

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    document.getElementById('forms').style.display = 'block';
    document.getElementById('token-form').style.display = 'none';
    document.getElementById('protected-content').style.display = 'none';
});

async function checkAuth() {
    const token = localStorage.getItem('token');
    if (token) {
        const response = await fetch('/api/auth/protected', {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        });

        if (response.ok) {
            document.getElementById('forms').style.display = 'none';
            document.getElementById('protected-content').style.display = 'block';
        } else {
            localStorage.removeItem('token');
        }
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.querySelectorAll('input').forEach(input => input.value = '');
}

checkAuth();
