document.getElementById('loginform').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // http://10.0.0.124:8080
    const response = await fetch('http://127.0.0.1:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mail: email, password: password})
        });

        if (response.ok) {
            const responseData = await response.json();
            const accessToken = responseData.access_token;
            // Store token in localStorage
            localStorage.setItem('accessToken', accessToken);
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.detail}`);
        }
});
