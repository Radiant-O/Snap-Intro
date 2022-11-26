<template>
  <p @click="toggle = !toggle" class="ext"><span>Features</span> <img src="../assets/images/icon-arrow-down.svg"/></p>
  <transition >
    
  <div class="dropdown both" v-if="toggle">
      <a href="#"><img src="../assets/images/icon-todo.svg"/> 
      <span>Todo List</span></a>
      <a href="#"><img src="../assets/images/icon-calendar.svg" /> <span>Calendar</span></a>
      <a href="#"
        ><img src="../assets/images/icon-reminders.svg" /> <span>Reminders</span></a
      >
      <a href="#"><img src="../assets/images/icon-planning.svg" /> <span>Planing</span></a>
  </div>
</transition>
</template>

<script>
export default {
  props: ['toggle'],
  data(){
    return{
      up: false,
      down: true
    }
  },
  // methods:{
  //   showdown(){
  //     this.down = !this.down
  //   },
  //   showup(){
  //     this.up = !this.up
  //   },
  // }
};
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

