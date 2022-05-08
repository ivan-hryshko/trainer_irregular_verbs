<template>
  <div class="trainer__layout">
    <div class="trainer__layout-trainer">
      <p class="trainer__layout-trainer-question">
        What is the <br>
        <span class="trainer__layout-trainer-question" style="font-style: italic;">
          past participle
        </span>
        of:
      </p>
        <span class="trainer__layout-trainer-question">
        </span>
      <div class="trainer__layout-trainer-counter">

      </div>
      <div class="progress">
        <div
          role="progressbar"
          class="progress-bar
          bg-success progress-bar-striped"
          style="width: 5%;"
          aria-valuenow="5"
          aria-valuemin="0"
          aria-valuemax="100"
        >
        </div>
      </div>
      <div class="trainer__layout-trainer-word">

      </div>
      <label for="trainer-input">
        <input
          type="text"
          class="trainer__layout-trainer-input"
          onkeypress="enterKeyPressed(event)"
          id="trainer-input"
        >
      </label>
      <div class="trainer__layout-trainer-submit" onclick="checkAnswer()">
        Submit
      </div>
      <div class="trainer__layout-trainer-answer">

      </div>
      <div class="trainer__layout-trainer-dev_field">

      </div>

    </div>

  </div>
</template>

<script>
import dictionary from "../../json/dictionary.json";

export default {
  name: 'PastParticiple',
  setup() {
    // const word = document.querySelector('.trainer__layout-trainer-word');
    // const myAnswer = document.querySelector('.trainer__layout-trainer-input');
    // const error = document.querySelector('.trainer__layout-trainer-answer');
    // const wordCounter = document.querySelector('.trainer__layout-trainer-counter');
    // const devField = document.querySelector('.trainer__layout-trainer-dev_field');
    // let currentWord = 0;
    // let isAnswerCorrect = 'true';
    // let answer = 'dictionary[wordCounter].participle';
    // let randomWordArray = wordsArray.slice();
    // let mistakeArray = [];
    // let mistakeCounter = 0;

    console.log('Hello');
    console.log(dictionary[0]);

    // start();


    function start() {
      randomizeArray();
      checkRepeat();
      // console.log(randomWordArray)
      // console.log(dictionary)
      changeWord();
    }

    function randomizeArray() {
      randomWordArray.sort(() => Math.random() - 0.5);
    }

    function changeWord() {
      word.innerText = randomWordArray[currentWord].present;
      answer = randomWordArray[currentWord].participle;
      wordCounter.innerText = `${currentWord + 1} of ${randomWordArray.length}`;
    }

    // document.addEventListener('keyup', logKey);
    //   function logKey(e) {
    //     if(e.code === 'Enter'){
    //       devField.innerText = e.code
    //       checkAnswer()

    //     }
    // }

    function enterKeyPressed(event) {
      if (event.keyCode === 13) {
        console.log('Enter key is pressed');
        checkAnswer();
        return true;
      }
      return false;
    }

    function checkAnswer() {
      console.log(myAnswer.value);
      console.log(answer);
      if (myAnswer.value.toLowerCase() === answer) {
        isAnswerCorrect = 'false';
        correctAnswer();
      } else {
        wrongAnswer();
      }
      // console.log(answer.event.target.value)
    }

    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    async function correctAnswer() {
      console.log('Correct');
      error.innerText = 'Correct!';
      error.style.color = 'green';
      await sleep(1000);
      error.innerText = '';
      myAnswer.value = '';
      checkEndGame();
    }

    async function wrongAnswer() {
      console.log('wrong');
      error.innerText = answer;
      error.style.color = 'red';
      mistakeCounter += 1;
      await sleep(2000);
      myAnswer.value = '';
      error.innerText = '';

      mistakeArray.push(randomWordArray[currentWord]);

      checkEndGame();
    }

    function checkEndGame() {
      currentWord += 1;
      if (currentWord < randomWordArray.length) {
        changeWord();
      } else {
        let correctAnswerCount = ((randomWordArray.length - mistakeCounter) * 100) / randomWordArray.length;
        correctAnswerCount = Math.floor(correctAnswerCount);
        alert(`Mistake: ${mistakeCounter}\nCorrect: ${correctAnswerCount}%`);
        restart();
      }
    }

    function checkRepeat() {
      let repeatCount = 0;
      const repeatArray = [];
      for (const word of randomWordArray) {
        repeatCount = 0;
        for (const wordCompare of randomWordArray) {
          if (word === wordCompare) {
            repeatCount += 1;
            if (repeatCount > 1) {
              repeatArray.push(wordCompare);
            }
          }
        }
      }
      console.log('repeat', repeatArray);
    }

    function restart() {
      currentWord = 0;
      mistakeCounter = 0;
      if (mistakeArray.length > 0) {
        randomWordArray = mistakeArray.slice();
        mistakeArray = [];
      } else {
        randomWordArray = wordsArray.slice();
      }
      changeWord();
    }

  }
}

</script>

<style lang="scss">
  @import 'past-participle.scss';
</style>