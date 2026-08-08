// ===============================
// PG & Hotels Finder
// Basic Login & Register System
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const mobile = inputs[2].value.trim();
        const password = inputs[3].value;
        const confirmPassword = inputs[4].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        };

        localStorage.setItem("pgFinderUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";
    });
}


// ===============================
// Login
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const inputs = loginForm.querySelectorAll("input");

        const email = inputs[0].value.trim();
        const password = inputs[1].value;

        const savedUser =
            JSON.parse(localStorage.getItem("pgFinderUser"));

        if (!savedUser) {

            alert("Account not found. Please create an account first.");

            window.location.href = "register.html";

            return;
        }

        if (
            email === savedUser.email &&
            password === savedUser.password
        ) {

            alert("Login successful! Welcome " + savedUser.name);

            window.location.href = "index.html";

        } else {

            alert("Invalid email or password!");

        }

    });
}