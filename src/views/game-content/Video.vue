<template>
    <div class="flex flex-1 flex-col gap-8 py-4 divide-y divide-zsi-500">
        <div class="flex flex-col gap-4 text-left">
            <image-large class="-mx-8" :image="videoVecirek" />
            <div class="flex flex-col text-left">
                <span class="font-bold">
                    Večírek u rappera McWesta [šílená párty!]
                </span>
                <span class="text-gray-500 font-medium">
                    115 247 zhlédnutí · 27. 7.
                </span>
            </div>
            <div class="grid grid-buttons justify-between text-center transform -translate-x-2 mb-6">
                <span class="flex flex-col gap-3 font-medium relative">
                    <img class="h-6 w-6 mx-auto scale-[200%]" :src="likeIcon">
                    <span class="absolute text-sm xs:text-base top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-gray-500">
                        12 tis.
                    </span>
                </span>
                <span class="flex flex-col gap-3 font-medium relative">
                    <img class="h-6 w-6 mx-auto scale-[200%]" :src="dislikeIcon">
                    <span class="absolute text-sm xs:text-base top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-gray-500">
                        14 tis.
                    </span>
                </span>
                <span class="flex flex-col gap-3 font-medium relative">
                    <img class="h-6 w-6 mx-auto" :src="repeatIcon">
                    <span class="absolute text-sm xs:text-base top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-gray-500">
                        sdílení
                    </span>
                </span>
                <span class="flex flex-col gap-3 font-medium relative">
                    <img class="h-6 w-6 mx-auto" :src="downloadIcon">
                    <span class="absolute text-sm xs:text-base top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-gray-500">
                        stáhnout
                    </span>
                </span>
            </div>
        </div>
        <div class="flex flex-col gap-5 pt-4">
            <div class="flex flex-row gap-3">
                <img :src="denikLogo" class="w-10 h-10">
                <div class="flex flex-col items-start text-[0.9375rem]">
                    <span class="font-bold">
                        Nový deník
                    </span>
                    <span class="text-gray-500">
                        214 odběratelů
                    </span>
                </div>
                <span class="text-zsi-500 font-bold self-center ml-auto mr-3">
                    ODEBÍRAT
                </span>
            </div>
            <div class="text-lg text-left">
                <p>
                    Večírek rappera McWesta, kde se odehrála populární kauza ananasové pizzy.
                </p>
                <p>
                    Více na <span class="text-zsi-500 underline"> www.novydenik.cz </span>
                </p>
            </div>
        </div>
        <div class="pt-4 text-left text-[0.9375rem] font-bold -mb-4">
            Komentáře <span class="text-gray-500 pl-3"> 816 </span>
            <div v-if="group === 'A'" class="flex flex-row gap-4 pt-8 pb-4">
                <img :src="kaja" class="w-10 h-10">
                <div class="flex flex-col gap-1 items-start text-[0.9375rem]">
                    <span class="font-bold">
                        Kája
                    </span>
                    <p class="text-lg font-normal text-left">
                        Očividně se párty odehrála dřív než samotný incident s pizzou
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-row gap-4 pt-8">
            <img v-if="group === 'A'" :src="gabinka" class="w-10 h-10">
            <div class="flex flex-col gap-1 items-start text-[0.9375rem]">
                <span class="font-bold">
                    Gábinka
                </span>
                <p class="text-lg text-left">
                    V celém videu nejde nikomu vidět do obličeje 😠
                </p>
            </div>
        </div>
        <span />
    </div>
</template>

<script setup lang="ts">
import videoVecirek from '../../assets/video-vecirek.png';
import ImageLarge from '../../components/ImageLarge.vue';
import likeIcon from '../../assets/like-icon.svg';
import dislikeIcon from '../../assets/dislike-icon.svg';
import repeatIcon from '../../assets/repeat-icon.svg';
import downloadIcon from '../../assets/download-icon.svg';
import denikLogo from '../../assets/denik-logo.png';
import gabinka from '../../assets/gabinka.png';
import kaja from '../../assets/kaja.png';

const group = localStorage.getItem('group');
</script>

<style scoped>
.grid-buttons {
    grid-template-columns: repeat(4, minmax(0, 3.5rem));
}
</style>