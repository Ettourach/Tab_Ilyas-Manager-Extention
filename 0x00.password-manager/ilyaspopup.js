document.getElementById('generate').addEventListener('click', function() {
    const password = generatePassword(12);
    document.getElementById('password').value = password;
});

document.getElementById('save').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    if (password) {
        chrome.storage.sync.set({ password: password }, function() {
            document.getElementById('message').textContent = 'Password saved!';
        });
    }
});

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

