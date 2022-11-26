<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="" />
    </div>
    <div class="menu_icon" @click="menu = !menu">
        <img src="../assets/images/icon-menu.svg"/>
    </div>
    <div class="lhs">
      <div class="nav">
        <featuresDropdown :toggle="toggle" />
        <companyDropdown :toggle="toggle" />
        <p><a href="#">Careers</a></p>
        <p><a href="#">About</a></p>
      </div>

      <div class="auth">
        <p class="log">Login</p>
        <p class="regbtn">Register</p>
      </div>
    </div>
    <div class="rhs" v-if="menu">
        <img class="close_icon"  @click="menu = !menu" src="../assets/images/icon-close-menu.svg" />
      <div class="mobile_nav">
        <featuresDropdown :toggle="toggle" />
        <companyDropdown :toggle="toggle" />
        <p><a href="#">Careers</a></p>
        <p><a href="#">About</a></p>
      </div>

      <div class="auth">
        <p class="log">Login</p>
        <p class="regbtn">Register</p>
      </div>
    </div>
  </header>
</template>

<script>
import companyDropdown from "@/components/companyDropdown.vue";
import featuresDropdown from "@/components/featuresDropdown.vue";
export default {
  components: {
    companyDropdown,
    featuresDropdown,
  },
  data() {
    return {
      toggle: false,
      menu: false
    };
  },
};
</script>

<style scoped>
.nav {
  @apply flex items-center;
}
</style>
