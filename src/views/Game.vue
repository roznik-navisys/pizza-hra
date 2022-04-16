<template>    
    <nav class="text-zsi-500 text-lg font-semibold" :to="{ name: 'Game' }">
        {{ currentScreenName }}
    </nav>
    <router-view />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const currentScreenName = computed(() => {
    return route.meta.name as string
})
</script>