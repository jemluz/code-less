<script setup>
</script>

<template>
    <a class="menu_button">
        <span>MENU</span>
        <svg class="open_menu_icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 2.38498e-08L2.38498e-07 0L0 20L2 20L2 11L16.17 11L10.67 16.5L12.08 17.92L20 10L12.08 2.08L10.67 3.5L16.17 9L2 9L2 2.38498e-08Z" />
        </svg>
    </a>
</template>

<style scoped lang="scss">
.menu_button {
    @apply flex text-base text-neutral-500;
    @apply hover:cursor-pointer transition-all duration-500 z-10;

    font-family: 'Quantico', sans-serif;
    font-weight: bold;

    span {
        @apply hidden sm:block;
    }

    .open_menu_icon {
        @apply h-6 mb-4 ml-4;
        @apply transition-all duration-500 fill-neutral-500;
    }

    &:hover {
        @apply text-neutral-50;

        .open_menu_icon {
            @apply fill-neutral-50;
        }
    }
}
</style>
