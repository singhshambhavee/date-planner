const questions = [
    {
        question: "What type of cuisine do you prefer?",
        answers: ["Italian", "Mexican", "Japanese", "Indian"]
    },
    {
        question: "What activity do you enjoy?",
        answers: ["Dinner", "Movie", "Picnic", "Concert"]
    },
    {
        question: "What location do you prefer?",
        answers: ["Park", "Restaurant", "Beach", "Home"]
    },
    {
        question: "What is your budget?",
        answers: ["Under $50", "$50 - $100", "$100 - $200", "Unlimited"]
    }
];

function displayQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.getElementById(`question${index + 1}`);
        const randomAnswer = q.answers[Math.floor(Math.random() * q.answers.length)];
        questionDiv.innerHTML = `<strong>${q.question}</strong><br>${randomAnswer}`;
    });
}

document.getElementById('submitAnswers').addEventListener('click', () => {
    const results = questions.map((q, index) => document.getElementById(`question${index + 1}`).innerText).join('\n');
    document.getElementById('results').innerText = results;
});

document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server or email
    const formData = new FormData(event.target);
fetch(`https://formspree.io/f/mvgooneg`, {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error)); // For demonstration purposes
});

window.onload = displayQuestions;