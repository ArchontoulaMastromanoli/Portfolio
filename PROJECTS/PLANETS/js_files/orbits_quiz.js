//ORBITS QUIZ WINDOW DATA
//INCLUDES FOUR QUESTIONS EACH OF WHICH HAS FOUR ANSWERS 
// "correct" INDICATES THE CORRECT ANSWER
const quizData = [
    {
        question: "How many orbits are there?",
        a: "3",
        b: "9",
        c: "15",
        d: "8",
        correct: "d"
    },

    {
        question: "What is the Inclination (degrees) value of Venus?",
        a: "3.4",
        b: "4.3",
        c: "5.8",
        d: "2.3",
        correct: "a"
    },

    {
        question: "What is the Sidereal Period of Earth?",
        a: "6y",
        b: "365.26d",
        c: "67d",
        d: "4d",
        correct: "b"
    },

    {
        question: "What is the Perihelion (AU) value of Mars?",
        a: "8.3",
        b: "9.1",
        c: "1.38",
        d: "7.4",
        correct: "c"
    }
];

//CONSTANTS AND VARIABLES
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

//ARRAY POINTER AND SCORE COUNTER 
let currentQuiz = 0
let score = 0

loadQuiz()

//FUNCTION THAT PASSES THE QUESTIONS AND ANSWERS DATA TO THE QUIZ PATTERN AND COUNTS THE CORRECT ANSWERS
function loadQuiz() {

    deselectAnswers()

    //PASSING QUIZ QUESTION
    const currentQuizData = quizData[currentQuiz]

    //PASSING THE CORRESPONDING ANSWERS
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//ENSURES THERE IS NOT DEFAULT SELECTED ANSWER WHEN THE QUIZ QUESTION IS LOADED
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//GETS THE ID OF THE SELECTED ANSWER
function getSelected(){
    let answer

    //CHECKS IF THE SELECTED ANSWER IS THE CORRECT ONE 
    //IF THE ANSWER IS CORRECT THE SCORE INCREASES BY ONE
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        } 

        //ARRAY POINTER IS INCREASED BY ONE WHEN THE SUBMIT BUTTON IS CLICKED 
        //SO THAT THE NEXT QUESTION AND ANSWERS WILL BE DISPLAYED IN THE QUIZ WINDOW
        currentQuiz++

        //CHECKS IF THERE IS MORE DATA IN THE ARRAY 
        //IF SO, THE QUIZ IS LOADED AGAIN WITH THE NEXT QUESTION AND ANSWERS
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {

            //WHEN ALL DATA HAS BEEN DISPLAYED THE USER GETS THE QUIZ FEEDBACK INCLUDING THEIR SCORE
            //THERE ARE TWO BUTTONS: RESTART THE QUIZ AND RETURN TO HOME PAGE
            quiz.innerHTML = `
                <H2>You answered ${score} / ${quizData.length} questions correctly!</h2>
                <button onclick="location.reload()">Reload</button>
                <button class="satellites-button" type="button" onclick="location.href='../html_files/orbits.html'">Orbits</button>
                <button class="satellites-button" type="button" onclick="location.href='../html_files/index.html'">Home Page</button>
            `
        }
    }

})

