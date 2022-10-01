<script setup>
import MenuButton from "./MenuButton.vue"
</script>

<template>
  <div>
    <div class="menu_bg"></div>
    <MenuButton/>
  </div>
</template>

<style scoped lang="scss">
.menu_bg {
    // @apply bg-amber-300 h-screen w-1/3 md:w-3/12 lg:w-3/12;
    @apply absolute left-0 bottom-0 z-0;
}
</style>
