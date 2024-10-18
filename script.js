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
        answers.push(select.value);
    });

    // Display selected answers in an alert or console
    alert(`You selected: ${answers.join(', ') }`);
});

// Add event listener to the form submission
document.getElementById('questionnaire').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    // You can add your own form submission handling here
    // For example, you could send an AJAX request or display a success message
    alert('Form submitted!');
});
