<template>
    <nav class="flex justify-between py-8" :to="{ name: 'Game' }">
        <img :src="arrowLeft" class="px-3 py-1 transform rotate-180 filter" :class="{ 'opacity-50 grayscale': !route.meta.prev }"
            @click="route.meta.prev && router.push(route.meta.prev)" />
        <span class="text-zsi-500 text-base font-semibold">
            {{ currentScreenName }}
        </span>
        <img :src="arrowLeft" class="px-3 py-1 filter" :class="{ 'opacity-50 grayscale': !route.meta.next }"
            @click="route.meta.next && router.push(route.meta.next)" />
    </nav>
    <router-view />
    <div class="py-12">
        <button-primary v-if="route.meta.next" @click="router.push({ name: route.meta.next as string })">
            Další
        </button-primary>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import arrowLeft from "../assets/arrow-left.svg";
import ButtonPrimary from "../components/ButtonPrimary.vue";

const route = useRoute();
const router = useRouter();

const currentScreenName = computed(() => {
    return route.meta.label as string;
});
</script>
