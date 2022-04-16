<template>
<div class="flex flex-1 flex-col justify-between py-4">
    <image-large :image="zsiLogo" class="h-12" />
    <div class="flex flex-col gap-14">
        <h1 class="text-[2.5rem] leading-snug max-w-[200px] mx-auto text-center font-extrabold uppercase">
            Vyřeš pizza záhadu
        </h1>
        <div class="flex flex-col gap-8 items-center">
            <button-primary @click="selectGroup('A')">
                Skupina A
            </button-primary>
            <button-primary @click="selectGroup('B')">
                Skupina B
            </button-primary>
        </div>
    </div>
    <router-link class="text-zsi-500 text-lg font-semibold" :to="{ name: 'Game' }">
        Pro učitele
    </router-link>
</div>
</template>

<script setup lang="ts">
import ButtonPrimary from '../components/ButtonPrimary.vue';
import zsiLogo from '../assets/zsi-logo.png'
import { useRouter } from 'vue-router';
import ImageLarge from '../components/ImageLarge.vue';

const router = useRouter()

const selectGroup = (group: 'A' | 'B') => {
    localStorage.setItem('group', group)
    router.push({ name:'Intro' })
}
</script>