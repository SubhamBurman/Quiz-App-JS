import quizData from "./quizData.js";

let questionNo = document.getElementById("question-no")
let score = document.getElementById("score")
let questionSection = document.getElementById("question-section")
let Btn = document.getElementById('btn');

let questionCount = 1;
console.log(questionSection);


// score.textContent = `Score: 3`


Btn.addEventListener('click',(e)=>{
    let randomNo = Math.floor(Math.random() * 79) + 1;
    
    Btn.textContent = 'Next'
    Btn.style.backgroundColor = "black"; 
    questionNo.textContent = `Question: ${questionCount}/10` 
    questionCount++;
console.log(questionSection.firstChild);
    
    // removePreviousQuestion();
    generateQuestion(randomNo);

})





// function removePreviousQuestion() {
//     if (questionSection.firstChild) {
//         lo
//         questionSection.removeChild(questionSection.firstChild);
//     }
// }







function generateQuestion(randomNo){
    let question = document.createElement('h2');
    question.className = 'font-bold text-xl mt-2 mb-4'
    question.textContent = quizData[randomNo].question;

    let answerButtons = document.createElement('div');
    answerButtons.className = 'flex flex-col gap-2 mb-5'

    quizData[randomNo].options.forEach((option)=>{
        let optionButton = document.createElement('button');
        optionButton.className = 'btn text-left border-2 rounded-md p-2 cursor-pointer';
        optionButton.textContent = option;
        answerButtons.appendChild(optionButton);
    })
    questionSection.appendChild(question)
    questionSection.appendChild(answerButtons)
}
// 





