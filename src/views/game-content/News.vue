<template>
    <div class="flex flex-1 flex-col gap-6 py-4">
        <profile-info
            :image="tvLogo"
            heading="Národní televize"
            :sub-heading="group === 'A' ? 'včera' : 'předevčírem'"
        />
        <div class="text-[1.0625rem] text-left flex flex-col gap-8">
            <p>
                Policie České republiky upozornila na internetovou komunikaci mezi známým raperem McWestem a pizzerií
                Jablečná borovice. Jde o další díl skládačky v kauze spojené s nelegálním pěstováním exotického ovoce.
            </p>
        </div>
        <div class="bg-gray-100 -mx-8 pt-3 pb-9 px-4 flex flex-col gap-4">
            <span class="text-sm text-gray-900 font-medium"> 10. 8. </span>
            <div class="flex flex-col items-start">
                <span class="text-sm text-left text-gray-500 font-medium py-2"> McWest </span>
                <div
                    class="bg-gray-200 text-black rounded-3xl rounded-bl-none w-3/5 py-3 px-5 text-[1.0625rem] leading-snug text-left"
                >
                    Yo, yo! Chtěl bych 20 pizz pro svoje boys a k tomu jeden speciál. Dovezte mi to zde
                    <span class="underline text-zsi-500"> 643Q6F8R+PH </span>.
                </div>
            </div>
            <div class="flex flex-col items-end">
                <span class="text-sm text-left text-gray-500 font-medium py-2"> Pizzerie Jablečná borovice </span>
                <div
                    class="bg-zsi-500 text-white rounded-3xl rounded-br-none w-3/5 py-3 px-5 text-[1.0625rem] leading-snug text-left"
                >
                    Děkujeme za vaši objednávku. Hned ji pro vás začneme připravovat. Pizzerie Jablečná borovice.
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-1 text-[1.0625rem]">
                2 tis.
                <img class="h-6 w-6 ml-2" :src="faceLaugh">
                <img class="h-6 w-6" :src="faceAngry">
                <img class="h-6 w-6" :src="faceSurprise">
            </div>
            <div class="text-[1.0625rem]">
                1,5 tis. komentářů
            </div>
        </div>
        <hr class="mx-auto border-t border-gray-300 w-full">
        <template v-if="group === 'B'">
            <div>
                <div class="flex flex-row">
                    Populární komentáře <img
                        class="transform rotate-90 ml-4 filter grayscale"
                        :src="arrowLeft"
                    >
                </div>
            </div>
            <div class="flex flex-row gap-5">
                <img :src="johnyEpic" class="h-16 w-16 ml-2">
                <div>
                    <div class="bg-gray-300 text-black rounded-3xl py-3 px-5 text-base leading-snug text-left">
                        <span class="font-semibold block mb-1"> Johnny EPIC </span>
                        Je tu jasný důkaz, že pizzerie je vinná. Když si člověk proklikne odkaz adresy, pošle ho to na
                        známou plantáž ananasů. Dále se tam McWest zmiňuje o speciálu, který pizzerie ve svém menu jinak
                        nenabízí. Co to v tom případě znamená? A největší důkaz je samotný název pizzerie. Když si ho
                        přeložíte a prohodíte slova výjde vám anglický název pineapple = ananas.
                    </div>
                    <div class="flex flex-row-reverse justify-between mt-3">
                        <div class="flex flex-row gap-1 text-base bg-pink-200 relative -top-6 rounded-xl p-2">
                            82
                            <img class="h-6 w-6 ml-1" :src="faceSurprise">
                        </div>
                        <div class="text-base">
                            300 Odpovědí
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import ProfileInfo from '../../components/ProfileInfo.vue';
import tvLogo from '../../assets/tv-logo.png';
import faceAngry from '../../assets/face-angry.png';
import faceLaugh from '../../assets/face-laugh.png';
import faceSurprise from '../../assets/face-surprise.png';
import arrowLeft from "../../assets/arrow-left.svg";
import johnyEpic from '../../assets/johny-epic.png';

const group = localStorage.getItem('group');
</script>