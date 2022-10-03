<template>
  <div>
    <div class="menu_bg" :class="{ 'move_to_left': !isMenuVisible }"></div>
    <MenuButton/>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { computed } from '@vue/reactivity';
  import { useMenuStore } from '../store'
  
  import MenuButton from "./MenuButton.vue"
  
  export default defineComponent({
    name: '',
    components: { MenuButton },
    
    setup() {
      const menu = useMenuStore();
      let isMenuVisible = computed(() => menu.isVisible)
      
      return {
        menu,
        isMenuVisible
      }
    }
  })
</script>

<style scoped lang="scss">
.menu_bg {
  @apply bg-amber-300 h-screen w-9/12 md:w-4/12 lg:w-3/12;
  @apply absolute left-0 bottom-0 z-0;
  @apply transition-all;
}

.move_to_left { @apply w-0; }

</style>
