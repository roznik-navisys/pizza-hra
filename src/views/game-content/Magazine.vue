<template>
    <div class="flex flex-1 flex-col gap-8 py-4">
        <image-large :image="group === 'A' ? magazineA : magazineB" />
    </div>
</template>

<script setup lang="ts">
import magazineA from '../../assets/magazine-a.png';
import magazineB from '../../assets/magazine-b.png';
import ImageLarge from '../../components/ImageLarge.vue';

const group = localStorage.getItem('group');
</script>