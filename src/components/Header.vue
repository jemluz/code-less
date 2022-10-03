<template>
  <header>
    <LefBar class="left_bar"/>
    <LogoIcon class="logo"/>
    <span class="right_space"></span>
  </header>
</template>

<script setup>
  import LogoIcon from "./LogoIcon.vue"
  import LefBar from "./LeftBar.vue";
</script>

<style scoped lang="scss">
header {
  @apply flex justify-center items-center;

  .left_bar {
    @apply flex w-1/3 md:w-4/12 lg:hidden;
    @apply justify-start pl-6 sm:pl-12 lg:p-0;
  }

  .logo {
    @apply w-1/3 md:w-6/12 lg:w-8/12 xl:w-10/12;
  }

  .right_space {
    @apply w-1/3 md:w-3/12 lg:hidden;
  }
}
</style>
