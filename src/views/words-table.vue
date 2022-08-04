<template>
  <div class="about">
    <div class="words-table">
      <div
        v-for="word in wordsArray" :key="word.past"
        class="words-table__row"
      >
        <div class="words-table__item">
          {{ word.present }}
        </div>
        <div class="words-table__item">
          {{ word.past }}
        </div>
        <div class="words-table__item">
          {{ word.participle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wordsArray from "@/json/dictionary.json";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'WordList',
  setup() {
    return {
      wordsArray,
    }

  },

})
</script>

<style>
@import 'words-table';
</style>
