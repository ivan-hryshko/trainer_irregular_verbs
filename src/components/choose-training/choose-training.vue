<template>
  <div class="choose-layout">
    <div class="choose-text">
      Choose training
    </div>
    <div class="choose-choose">
      <div class="choose-type">
        Type:
      </div>
      <div class="choose-options">
        <div class="choose-option">
          Past simple
        </div>
        <div class="choose-option choose-active">
          Past particle
        </div>
      </div>
    </div>
    <div class="choose-choose">
      <div class="choose-type">
        Words counts:
      </div>
      <div class="choose-options">
        <div class="choose-option choose-active">
          20
        </div>
        <div class="choose-option">
          65
        </div>
      </div>
    </div>
    <div class="choose-submit" @click="starTraining">
      Start
    </div>

  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'ChooseTraining',
  setup() {
    const router = useRouter()
    let routeToPage = ref('PastParticle')

    function starTraining() {
      router.push({name:`${routeToPage.value}`})

    }

    return {
      router,
      starTraining,
    }
  },
}
</script>

<style lang="scss">
  @import 'choose-training';
</style>