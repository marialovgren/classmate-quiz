/*
* Inlämningsuppgift gjord av Maria Lövgren FED21M
*/

// Andvänd Bootstrap cards till att visa bild och namn


const form = document.querySelector('.quiz.form');
const result = document.querySelector('.result');

const students = [
    {
        name: "Pelle",
        image: "url till bild",
    },
    {
        name: "Kalle",
        image: "url till bild",
    },
    {
        name: "Anna",
        image: "url till bild",
    },
    {
        name: "Emma",
        image: "url till bild",
    }
];

form.addEventListener('submit', e => {
    e.preventDefault(); // hindrar formuläret från att skickas iväg till servern. 

    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value]

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === students[index]) {
            score += 1;
        }
    });

    // Show result
});