<template>
    <div class="flex flex-col min-h-full max-h-max w-full bg-gray-200">
        <div class="w-full sm:max-w-md mx-auto bg-white p-4 text-center flex min-w-0 flex-col flex-1 overflow-x-visible">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
html, body, #app {
    @apply h-full p-0 m-0 border-0 overflow-x-hidden
}
</style>
