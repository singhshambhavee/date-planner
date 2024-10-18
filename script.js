// script.js

function randomAnswer(questionId) {
    const answers = {
        question1: ["sushi", "pasta", "pizza", "burger", "ramen", "tacos", "chicken", "momo", "noodles"],
        question2: ["movie", "beach", "museum", "event", "escape", "bowling", "painting", "park"],
        question3: ["time", "letter", "sun", "book", "trip", "stargazing", "drive", "magic", "photo"],
        question4: ["floral", "shiny", "pearl", "cocktail", "vintage", "cultural"],
        question5: ["Afternoon", "Evening", "Night", "Early Morning"],
        question6: ["jewellery", "makeup", "perfume", "teddy", "chocolate", "dress"]
    };

    // Get the dropdown for the specific question
    const dropdown = document.getElementById(questionId);
    
    // Select a random answer from the corresponding array
    const randomIndex = Math.floor(Math.random() * answers[questionId].length);
    const selectedAnswer = answers[questionId][randomIndex];

    // Set the selected answer in the dropdown
    dropdown.value = selectedAnswer;
}
// Get the "Are You Sure?" button
const areYouSureButton = document.getElementById('are-you-sure');

// Add event listener to the "Are You Sure?" button
areYouSureButton.addEventListener('click', () => {
    // Get the selected answers
    const answers = [];
    const selects = document.querySelectorAll('select');
    selects.forEach((select) => {
        answers.push(select.value);
    });

    // Display selected answers in an alert
    alert(`You selected: ${answers.join(', ')}`);
});

