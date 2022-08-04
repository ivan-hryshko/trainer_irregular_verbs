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
        {{ currentWord + 1 }} of {{ randomWordArray.length }}

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
        {{ randomWordArray[currentWord].present }}

      </div>
      <label for="trainer-input">
        <input
          type="text"
          :class="inputClassOptions"
          v-model="myAnswer"
          id="trainer-input"
          @keyup.enter="checkAnswer"
        >
      </label>
          <!-- onkeypress="enterKeyPressed(event)" -->
      <div class="trainer__layout-trainer-submit" @click="checkAnswer">
        Submit
      </div>
      <div
        class="trainer__layout-trainer-submit"
        @click="currentWord=randomWordArray.length-1"
        style="background: gray"
      >
        Finish game
      </div>
      <div
        class="trainer__layout-trainer-answer"
        :style="answerStyle"
      >
        {{ answer }}

      </div>
      <div class="trainer__layout-trainer-dev_field">

      </div>

    </div>

  </div>
</template>

<script>
import wordsArray from "../../json/dictionary.json";
import { onMounted, computed, ref } from 'vue'

export default {
  name: 'PastParticiple',
  setup() {
    // const word = document.querySelector('.trainer__layout-trainer-word');
    // const myAnswer = document.querySelector('.trainer__layout-trainer-input');
    // const error = document.querySelector('.trainer__layout-trainer-answer');
    // const wordCounter = document.querySelector('.trainer__layout-trainer-counter');
    // const devField = document.querySelector('.trainer__layout-trainer-dev_field');

    const randomWordArray = ref(wordsArray.slice())
    const currentWord = ref(0)
    const mistakeCounter = ref(0)
    const mistakeArray = ref([])
    const myAnswer = ref('')
    const answer = ref('')
    const answerColor = ref('')
    const isAnswerCorrect = ref('false')
    const isShowMistakeAnimation = ref(false)
    const isShowCorrectAnimation = ref(false)
    const answerStyle = ref({
      color: 'red',
      display: 'none'
    })
    const inputClassOptions = computed(() => {
      return {
        'trainer__layout-trainer-input': true,
        'mistake_animation': isShowMistakeAnimation.value,
        'correct_answer_animation': isShowCorrectAnimation.value,
      }
    })


    start();

    function start() {
      console.log('Hello');
      randomizeArray();
      // checkRepeat();
      console.log(wordsArray)
      console.log(randomWordArray.value)
      changeWord();
    }

    function randomizeArray() {
      randomWordArray.value.sort(() => Math.random() - 0.5);
      randomWordArray.value = randomWordArray.value.slice(0, 20)
    }

    function changeWord() {
      answer.value = randomWordArray.value[currentWord.value].participle;
    }

    function enterKeyPressed(event) {
      if (event.keyCode === 13) {
        console.log('Enter key is pressed');
        checkAnswer();
        return true;
      }
      return false;
    }

    function checkAnswer() {
      console.log('My: ', myAnswer.value)
      console.log('ans: ', answer.value)
      if (myAnswer.value.toLowerCase() === answer.value) {
        isAnswerCorrect.value = 'false';
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
      answer.value = 'Correct!';
      answerStyle.value.color = 'green';
      answerStyle.value.display = 'block'
      isShowCorrectAnimation.value = true
      await sleep(1000);
      isShowCorrectAnimation.value = false
      answerStyle.value.display = 'none'
      myAnswer.value = '';
      checkEndGame();
    }

    async function wrongAnswer() {
      console.log('wrong');
      mistakeCounter.value += 1;
      answerStyle.value.color = 'red';
      answerStyle.value.display = 'block'
      isShowMistakeAnimation.value = true
      await sleep(2000);
      isShowMistakeAnimation.value = false
      answerStyle.value.display = 'none'
      myAnswer.value = '';
      mistakeArray.value.push(randomWordArray.value[currentWord.value]);
      checkEndGame();
    }

    function checkEndGame() {
      currentWord.value += 1;
      if (currentWord.value < randomWordArray.value.length) {
        changeWord();
      } else {
        let correctAnswerCount = ((randomWordArray.value.length - mistakeCounter.value) * 100) / randomWordArray.value.length;
        correctAnswerCount = Math.floor(correctAnswerCount);
        alert(`Mistake: ${mistakeCounter.value}\nCorrect: ${correctAnswerCount}%`);
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
      console.log('in restart')
      console.log(mistakeArray.value)

      currentWord.value = 0;
      mistakeCounter.value = 0;
      if (mistakeArray.value.length > 0) {
        randomWordArray.value = mistakeArray.value.slice();
      } else {
        randomizeArray()
      }
      mistakeArray.value = [];
      changeWord();
    }

    return {
      answer,
      myAnswer,
      currentWord,
      answerColor,
      answerStyle,
      randomWordArray,
      inputClassOptions,
      checkAnswer,
      enterKeyPressed,
    }

  }
}

</script>

<style lang="scss">
  @import 'past-participle.scss';
</style>