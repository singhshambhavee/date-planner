function randomAnswer(questionId) {
    const select = document.getElementById(questionId);
    const options = select.options;
    const randomIndex = Math.floor(Math.random() * options.length);
    select.selectedIndex = randomIndex;
}

// Get the "Are You Sure?" button
const areYouSureButton = document.getElementById('are-you-sure');

// Add event listener to the "Are You Sure?" button
areYouSureButton.addEventListener('click', () => {
    // Get the selected answers
    const answers = [];
    const selects = document.querySelectorAll('select');
    selects.forEach((select) => {
        answers.push(select.options[select.selectedIndex].text);
    });

    // Display selected answers in an alert
    alert(`You selected:\n${answers.join('\n')}`);
});

// Add event listener to the form submission
document.getElementById('questionnaire').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Redirect to the Google Form
    window.location.href = 'https://docs.google.com/forms/d/1ZQiMsY62Vq4mwzwkM1xpQP4Y6w3yyxqZ2z4hktsRfPA/viewform?pli=1&pli=1&edit_requested=true';
});
