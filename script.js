import quizData from "./quizData.js";

let questionNo = document.getElementById("question-no")
let score = document.getElementById("score")
let questionSection = document.getElementById("question-section")
let Btn = document.getElementById('btn');

let questionCount = 1;
let userScore = 0;







Btn.addEventListener('click',(e)=>{
    let randomNo = Math.floor(Math.random() * 79) + 1;

    Btn.textContent = 'Next'
    Btn.style.backgroundColor = "black"; 
    questionNo.textContent = `Question: ${questionCount}/10`  
    score.textContent = `Score: ${userScore}`


    questionCount++;
    
    if (questionCount === 11) {
        Btn.textContent = 'Restart'
        Btn.style.backgroundColor = "green"; 
        questionCount = 1;
        userScore = 0;
    }

    generateQuestion(randomNo);
    
    
})

    


function generateQuestion(randomNo){
    let question = document.createElement('h2');
    question.className = 'font-bold text-xl mt-2 mb-4'
    question.textContent = quizData[randomNo].question;

    let answerButtons = document.createElement('div');
    answerButtons.className = 'flex flex-col gap-2 mb-5'

    quizData[randomNo].options.forEach((option)=>{
        let optionButton = document.createElement('button');
        optionButton.className = 'optn text-left border-2 rounded-md p-2 cursor-pointer';
        optionButton.textContent = option;

        optionButton.addEventListener('click', (event) => {
      
            if (event.target.textContent === quizData[randomNo].correctAnswer) {
              event.target.classList.add('bg-green-400');
              event.target.classList.add('text-white');
              userScore++; 
              score.textContent = `Score: ${userScore}`;
            } else {
              event.target.style.backgroundColor = 'red'
              event.target.style.color = 'white'
              
            }
            const allButtons = document.querySelectorAll('.optn');
            allButtons.forEach((button) => {
            button.disabled = true;
      });
          });
          answerButtons.appendChild(optionButton);
    })
    questionSection.innerHTML = '';

    questionSection.appendChild(question)
    questionSection.appendChild(answerButtons)




    

}








