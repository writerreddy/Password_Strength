document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const checkPasswordButton = document.getElementById("checkPassword");
    const resultDiv = document.getElementById("result");

    checkPasswordButton.addEventListener("click", function () {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        resultDiv.textContent = `Password Strength: ${strength}`;
    });

    function calculatePasswordStrength(password) {
        if (password.length > 8) {
            return "Strong";
        } else if (password.length > 6) {
            return "Medium";
        } else {
            return "Weak";
        }
    }
});
