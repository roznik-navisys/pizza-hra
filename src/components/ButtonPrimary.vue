<template>
    <button 
        :disabled="disabled"
        class="text-white text-xl font-moreno font-semibold py-2 px-12 rounded-md"
        :class="{ 'bg-zsi-500': !disabled, 'bg-gray-400 line-through': disabled }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps({
    disabled: {
        type: Boolean,
        default: false,
    }
});
</script>