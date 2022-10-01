<script setup>
import LogoIcon from "./LogoIcon.vue"
import LefBar from "./LeftBar.vue";
</script>

<template>
  <header>
    <LefBar class="left_bar"></LefBar>
    <LogoIcon class="logo"></LogoIcon>
    <span class="right_space"></span>
  </header>
</template>

<style scoped lang="scss">
header {
  @apply flex justify-center items-center;

  .left_bar {
    @apply flex w-1/3 md:w-3/12 lg:hidden;
    @apply justify-start md:justify-center pl-6 sm:pl-12 md:p-0;
  }

  .logo {
    @apply w-1/3 md:w-6/12 lg:w-8/12 xl:w-10/12;
  }

  .right_space {
    @apply w-1/3 md:w-3/12 lg:hidden;
  }
}
</style>
