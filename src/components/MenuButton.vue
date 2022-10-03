<template>
    <a class="menu_button" @click="toggleVisibility()" :class="{ 'move_to_right': isMenuVisible }">
        <span :style="{ 'color': isMenuVisible ? '#222' : '', }">MENU</span>

        <!-- open icon -->
        <svg
            class="open_menu_icon" 
            :style="{ 'display': isMenuVisible ? 'none' : 'flex',  }" 
            viewBox="0 0 20 20" fill="none" 
        >
            <path
                d="M2 2.38498e-08L2.38498e-07 0L0 20L2 20L2 11L16.17 11L10.67 16.5L12.08 17.92L20 10L12.08 2.08L10.67 3.5L16.17 9L2 9L2 2.38498e-08Z" />
        </svg>

        <!-- close icon -->
        <svg 
            class="close_menu_icon" 
            :style="{ 
                'display': isMenuVisible ? 'flex' : 'none', 
                'fill': isMenuVisible ? '#222' : '', 
            }" 
            viewBox="0 0 14 14" fill="none" 
        >
            <path d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z"/>
        </svg>
    </a>
</template>

<script>
    import { defineComponent } from 'vue';
    import { computed } from '@vue/reactivity';
    import { useMenuStore } from '../store'
    
    export default defineComponent({
        name: 'MenuButton',
        setup() {
            const menu = useMenuStore()
            let isMenuVisible = computed(() => menu.isVisible)
    
            function toggleVisibility() {
                isMenuVisible = !isMenuVisible;
                menu.setVisibility(isMenuVisible);
            }
    
            return {
                menu,
                isMenuVisible,
                toggleVisibility,
            }
        }
    })
</script>

<style scoped lang="scss">
.menu_button {
    @apply flex text-base text-neutral-500;
    @apply hover:cursor-pointer transition-all duration-500 z-10;

    font-family: 'Quantico', sans-serif;
    font-weight: bold;

    span {
        @apply hidden sm:block;
    }

    .open_menu_icon, 
    .close_menu_icon {
        @apply h-6 mb-4 ml-4;
        @apply transition-all duration-500 fill-neutral-500;
    }

    &:hover {
        @apply text-neutral-50;

        .open_menu_icon,
        .close_menu_icon {
            @apply fill-neutral-50;
        }
    }
}
</style>
