<template>
    <div class="flex flex-1 flex-col gap-6 py-4">
        <profile-info :image="tvLogo" :heading="group === 'A' ? 'Národní televize' : 'Česká Televize'"
            :sub-heading="group === 'A' ? 'včera' : 'předevčírem'" />
        <div class="text-[1.0625rem] text-left flex flex-col gap-8">
            <p>
                Policie České republiky upozornila na internetovou komunikaci mezi známým raperem McWestem a pizzerií
                Jablečná borovice. Jde o další díl skládačky v kauze spojené s nelegálním pěstováním exotického ovoce.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProfileInfo from '../../components/ProfileInfo.vue';
import tvLogo from '../../assets/tv-logo.png';

const group = localStorage.getItem('group')
</script>