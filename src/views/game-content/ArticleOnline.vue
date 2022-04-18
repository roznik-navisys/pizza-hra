<template>
<div class="flex flex-1 flex-col gap-8 py-4">
    <h1 class="text-[1.65rem] font-moreno font-extrabold mt-2">
        Pizza s ananasem zase udeřila. Kdo bude další?
    </h1>
    <profile-info :image="aktualneLogo" smaller-image heading="Aktuality365.cz" sub-heading="Včera, 19:00" />
    <div class="text-[1.0625rem] flex flex-col gap-8 relative text-left mb-8">
        <p>
            Na sociálních sítích se v posledních dnech šíří příběh ženy, která si objednala pizzu v pizzerii Jablečná borovice a její tříletý syn měl alergickou reakci. Žena tvrdí, že její syn je vysoce alergický na ananas.
        </p>
        <p>
        “V pizze musel být ananas bez našeho vědomí. Je to nehorázně nezodpovědné a nelegální. Měli by to tam zavřít!,” řekla žena k celé kauze.
        </p>
        <p>
        Syn byl odvezený do nejbližší nemocnice a je pod dohledem doktorů.
        </p>
    </div>
    <image-large class="-mx-8" :image="ambulance" />
    <div v-if="group === 'A'" class="flex flex-col">
        <div class="mt-8 mb-6 font-bold self-start">
            Komentáře <span class="text-gray-500 ml-2"> 56 </span>
        </div>
        <div class="flex flex-row gap-4">
            <img :src="gabinka" class="w-10 h-10">
            <div class="flex flex-col gap-1 items-start text-[0.9375rem]">
                <span class="font-bold">
                    Gábinka
                </span>
                <p class="text-lg text-left">
                    Nové informace z nemocnice potvrdili, že se malý klučina pouze dusil kouskem pizzy a rodina neprovedla první pomoc.
                    😓😓 žádný ananas tam nebyl
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import aktualneLogo from '../../assets/aktualne-logo.png';
import ambulance from '../../assets/ambulance.png';
import gabinka from '../../assets/gabinka.png';
import ImageLarge from '../../components/ImageLarge.vue';
import ProfileInfo from '../../components/ProfileInfo.vue';

const group = localStorage.getItem('group')
</script>