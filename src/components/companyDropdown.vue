<template>
  <p @click="toggle = !toggle" class="ext"><span>Company</span> <img src="../assets/images/icon-arrow-down.svg" /></p>

  <transition>
  <div class="dropdown company both" v-if="toggle">
    <a href="#">History</a>

    <a href="#">Our Team</a>

    <a href="#">Blog</a>
  </div>
</transition>
</template>

<script>
export default {
  props: ['toggle'],

}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
