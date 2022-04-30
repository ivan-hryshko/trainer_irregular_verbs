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

word = document.querySelector('.trainer__layout-trainer-word')
myAnswer = document.querySelector('.trainer__layout-trainer-input')
error = document.querySelector('.trainer__layout-trainer-answer')
let wordCounter = 0
let isAnswerCorrect = 'true'
let answer = 'dictionary[wordCounter].participle'

console.log("Hello")


changeWord()

function changeWord() {
  word.innerText = dictionary[wordCounter].present
  answer = dictionary[wordCounter].participle

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
  await sleep(2000)
  error.innerText = ''

  checkEndGame()


}

function checkEndGame() {
  wordCounter += 1
  if (wordCounter < dictionary.length) {

    changeWord()

  } else {

  }

}



