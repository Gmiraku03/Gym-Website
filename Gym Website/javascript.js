// javascript.js

document.addEventListener("DOMContentLoaded", function() {
    // Dëgjues ngjarjeje për ndryshimin e dark mode
    document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// Funksioni për llogaritjen e BMI
function calculateBMI() {
    // Merr vlerat e peshës dhe gjatësisë nga formulari
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Llogarit BMI
    var bmi = weight / (height * height);

    // Përcakto një mesazh bazuar në vlerën e BMI
    var message = "";
    if (bmi < 18.5) {
        message = "Nën peshë";
    } else if (bmi >= 18.5 && bmi < 25) {
        message = "Peshë normale";
    } else if (bmi >= 25 && bmi < 30) {
        message = "Mbipeshë";
    } else {
        message = "Obez";
    }

    // Shfaq rezultatin në faqe
    document.getElementById('result').innerHTML = "BMI: " + bmi.toFixed(2) + " - " + message;
}
function submitFeedback() {
    var username = document.getElementById('username').value;
    var feedbackText = document.getElementById('feedback-text').value;

    if (username && feedbackText) {
        alert('Feedback submitted!\n\nUsername: ' + username + '\nFeedback: ' + feedbackText);

        // Fshi vlerat pas dërgimit të feedback-it
        document.getElementById('username').value = '';
        document.getElementById('feedback-text').value = '';
    } else {
        alert('Please fill in all fields before submitting feedback.');
    }
}
