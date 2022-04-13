<template>
<div class="flex flex-1 flex-col justify-between p-8">
    <div :style="{ backgroundImage: `url(${zsiLogo})` }" class="h-12 bg-cover" />
    <h1 class="text-4xl leading-snug font-bold uppercase">
        Vyřeš pizza záhadu
    </h1>
    <div class="flex flex-col gap-8">
        <button-primary>
            Skupina A
        </button-primary>
        <button-primary>
            Skupina B
        </button-primary>
    </div>
    <router-link class="text-zsi-500 font-semibold" :to="{ name: 'Game' }">
        Pro učitele
    </router-link>
</div>
</template>

<script setup lang="ts">
import ButtonPrimary from '../components/ButtonPrimary.vue';
import zsiLogo from '../assets/zsi-logo.png'
</script>