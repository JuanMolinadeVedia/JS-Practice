document.getElementById("submit-button").addEventListener("click", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password fields.");
        return;
    }

    const users = [
        {
            username: "admin", password: "1234"
        },
        {
            username: "pepe", password: "el"
        },
    ];

    const userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        window.location.href = "../index.html";
    } else {
        alert("Invalid username or password.");
    }
});
