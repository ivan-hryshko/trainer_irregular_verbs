<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PastParticiple/>
  </div>
</template>

<script>
// @ is an alias to /src
import PastParticiple from '@/components/past-participle';

export default {
  name: 'HomeView',
  components: {
    PastParticiple,
  },
};
</script>


