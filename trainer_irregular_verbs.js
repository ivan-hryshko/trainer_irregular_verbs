const dictionary = [
  {
    present: 'go',
    past: 'went',
    participle: 'gone',
    ukraine: 'Йти'
  },
  {
    present: 'do',
    past: 'did',
    participle: 'done',
    ukraine: 'робити'
  },
  {
    present: 'eat',
    past: 'ate',
    participle: 'eaten',
    ukraine: 'їсти'
  },

]

const word = document.querySelector('.trainer__layout-trainer-word')
const myAnswer = document.querySelector('.trainer__layout-trainer-input')
const error = document.querySelector('.trainer__layout-trainer-answer')
const wordCounter = document.querySelector('.trainer__layout-trainer-counter')
let currentWord = 0
let isAnswerCorrect = 'true'
let answer = 'dictionary[wordCounter].participle'
let randomWordArray = dictionary
let mistakeCounter = 0

console.log("Hello")


changeWord()

function changeWord() {
  word.innerText = randomWordArray[currentWord].present
  answer = randomWordArray[currentWord].participle
  wordCounter.innerText = `${currentWord + 1} of ${randomWordArray.length}`

}

document.addEventListener('keyup', logKey);
function logKey(e) {
  if(e.code === 'Enter'){
    checkAnswer()
  }
}

function checkAnswer() {
  console.log(myAnswer.value)
  console.log(answer)
  if (myAnswer.value === answer) {
    isAnswerCorrect = 'false'
    correctAnswer()
  } else {
    wrongAnswer()

  }
  // console.log(answer.event.target.value)

}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

async function correctAnswer() {
  console.log("Correct")
  error.innerText = 'Correct!'
  error.style.color = "green";
  await sleep(1000)
  error.innerText = ''
  myAnswer.value = ''
  checkEndGame()
}

async function wrongAnswer() {
  console.log("wrong")
  error.innerText = answer
  error.style.color = 'red';
  myAnswer.value = ''
  mistakeCounter += 1
  await sleep(2000)
  error.innerText = ''

  checkEndGame()


}

function checkEndGame() {
  currentWord += 1
  if (currentWord < randomWordArray.length) {

    changeWord()

  } else {
    let correctAnswerCount = ((randomWordArray.length - mistakeCounter) * 100) / randomWordArray.length
    correctAnswerCount = Math.floor(correctAnswerCount)
    alert (`Mistake: ${mistakeCounter}\nCorrect: ${correctAnswerCount}%`)
    restart()
  }
}

function restart() {
  currentWord = 0
  mistakeCounter = 0
  changeWord()
}



