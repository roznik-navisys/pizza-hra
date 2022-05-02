<template>
    <div class="flex flex-1 flex-col justify-between py-4">
        <h1 class="text-zsi-500 text-lg font-moreno font-semibold mt-4" :to="{ name: 'Game' }">
            Skupina {{ group }}
        </h1>
        <image-large :image="groupIntro" />
        <div class="text-[1.0625rem] flex flex-col gap-8 px-4 pt-4">
            <p>
                Nyní jste rozděleni do <strong>dvou skupin</strong>.
            </p>
            <p>
                Dojdete nezávisle na sobě ke stejným závěrům?
            </p>
            <p>
                Zaznamenávejte si všechny podstatné informace a data. Budou se vám hodit, až budete své závěry prezentovat ostatním.
            </p>
        </div>
        <div class="mt-4">
            <button-primary @click="router.push({ name: 'ArticleIntro' })">
                Začít
            </button-primary>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonPrimary from '../components/ButtonPrimary.vue';
import groupIntro from '../assets/group-intro.png';
import ImageLarge from '../components/ImageLarge.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const group = localStorage.getItem('group');
</script>