const dictionary = [
  {
    present: 'go',
    past: 'went',
    particle: 'gone',
    urkaine: 'Йти'
  },
  {
    present: 'do',
    past: 'did',
    particle: 'done',
    urkaine: 'робити'
  },
  {
    present: 'eat',
    past: 'ate',
    particle: 'eaten',
    urkaine: 'їсти'
  },

]

word = document.querySelector('.trainer__layout-trainer-word')
myAnswer = document.querySelector('.trainer__layout-trainer-answer')


console.log("Hello")

// answer.addEventListener('input', (event) => {
  //   // console.log(event.target.value)
  //   //
    // });
// }

let isAnswerCorrect = 'true'

for (const word of dictionary) {
  isAnswerCorrect = 'true'
  word.innerText = word.present
  while (isAnswerCorrect) {


  }

}

document.addEventListener('keyup', logKey);
function logKey(e) {
  if(e.code === 'Enter'){
    checkAnswer()
  }
}

function checkAnswer() {
  // console.log(answer)
  console.log(answer.value)
  if (myAnswer.value === answer) {
    isAnswerCorrect = 'false'

  }
  // console.log(answer.event.target.value)

}



