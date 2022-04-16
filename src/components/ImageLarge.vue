<template>
    <div :style="{ backgroundImage: `url(${image})` }" class="render-image bg-center bg-no-repeat bg-contain" 
    />
</template>

<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
})
</script>