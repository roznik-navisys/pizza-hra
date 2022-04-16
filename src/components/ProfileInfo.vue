<template>
    <div class="flex flex-row gap-4">
        <img :src="image" class="h-16 w-16">
        <div class="flex flex-col items-start my-auto">
            <span class="font-bold"> 
                {{ heading }}
            </span>
            <span class="text-gray-400"> 
                {{ subHeading }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    subHeading: {
        type: String,
        default: '',
    },
})
</script>