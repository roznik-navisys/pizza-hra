<template>
    <div class="flex flex-1 flex-col gap-12 py-4">
        <image-large :image="zsiLogo" class="h-12" />
        <image-large :image="personOutro" class="-m-8" />
        <div class="text-[1.0625rem] flex flex-col gap-8 px-4 mt-2">
            <p>
                Doufáme, že jste si všechny své poznatky pečlivě zaznamenali a jste <strong>připraveni</strong> na svou <strong>prezentaci</strong>.
            </p>
            <p>
                Omlouváme se, pokud jsme urazili ty, jež mají rádi pizzu s ananasem. Každý má právo jíst, co chce. :)
            </p>
            <p>
                Tento příběh je inspirovaný známou kauzou "<strong>Pizzagate</strong>". Tato konspirační teorie se šířila ve Spojených státech amerických během prezidentské kampaně v roce 2016.
            </p>
        </div>
        <div>
            <button-primary @click="router.push({ name: 'Home' as string })">
                Hlavní strana
            </button-primary>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import personOutro from '../assets/person-outro.png';
import zsiLogo from '../assets/zsi-logo.png';
import ImageLarge from '../components/ImageLarge.vue';
import ButtonPrimary from '../components/ButtonPrimary.vue';

const router = useRouter();
</script>