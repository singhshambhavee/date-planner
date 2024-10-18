function randomAnswer(questionId) {
    const answers = {
        question1: ["The Notebook", "Pride and Prejudice", "Titanic"],
        question2: ["Candlelight Dinner", "Beach Walk", "Movie Night"],
        question3: ["Perfect", "All of Me", "I Will Always Love You"],
        question4: ["Paris", "Venice", "Santorini"],
        question5: ["Stargazing", "Picnic", "Dancing"],
        question6: ["Love conquers all.", "You had me at hello.", "To love and be loved is to feel the sun from both sides."]
    };

    // Get the dropdown for the specific question
    const dropdown = document.getElementById(questionId);
    
    // Select a random answer from the corresponding array
    const randomIndex = Math.floor(Math.random() * answers[questionId].length);
    const selectedAnswer = answers[questionId][randomIndex];

    // Set the selected answer in the dropdown
    dropdown.value = selectedAnswer;
}

function submitForm() {
    // Redirect to Google Form
    window.location.href = "https://your-google-form-link.com"; // Replace with your actual Google Form link
}
