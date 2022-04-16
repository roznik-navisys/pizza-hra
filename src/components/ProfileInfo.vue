<template>
    <div class="flex flex-row gap-4">
        <img :src="image" :class="{ 'h-16 w-16': !smallerImage, 'h-12 w-12': smallerImage }" >
        <div class="flex flex-col items-start my-auto min-w-0 text-[0.9375rem]">
            <span class="font-bold overflow-hidden text-ellipsis whitespace-nowrap max-w-full"> 
                {{ heading }}
            </span>
            <span class="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-full"> 
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
    smallerImage: {
        type: Boolean,
        default: false,
    },
})
</script>