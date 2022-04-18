<template>
    <div class="flex flex-1 flex-col gap-6 py-4 divide-y divide-zsi-500 -mt-2">
        <!-- Pizza 1 -->
        <span />
        <div class="flex flex-col gap-6 pt-6">
            <profile-info :image="pizzaLogo" heading="Pizzerie Jablečná borovice" sub-heading="@pizza_jablecna_borovice" />
            <div class="text-[1.0625rem] text-left flex flex-col gap-8">
                <p>
                    Od chvíle, kdy byla zveřejněna tato šílená a vykonstruovaná konspirační teorie, čelíme neustálým útokům.
                    Celé dny neděláme nic jiného, než se jen snažíme uklidnit situaci a také naše zaměstnance a blízké.
                </p>
            </div>
            <span class="text-base text-gray-500 self-start"> 10:45 | včera </span>
            <div class="grid grid-flow-col justify-between">
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="messageIcon"> 120
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="repeatIcon"> 15
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="heartIcon"> 6 tis.
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="downloadIcon">
                </span>
            </div>
        </div>
        <!-- Epic -->
        <div class="flex flex-col gap-6 pt-6">
            <profile-info :image="johnyEpic" heading="Johny EPIC" sub-heading="@jsem_bo$$" />
            <div class="text-[1.0625rem] text-left flex flex-col gap-8">
                <p>
                    Je všeobecné známá informace, že McWest má alergii na laktózu, takže je nepravděpodobné, že by tohle snědl...
                </p>
            </div>
            <!-- Káně 1 -->
            <div class="flex flex-col gap-6 border border-zsi-500 rounded-3xl -mx-4 p-4">
                <profile-info :image="kaneMcWest" heading="Káně McWest" sub-heading="@pravy_rapper" />
                <div class="text-[1.0625rem] text-left flex flex-col gap-8">
                    <p>
                        Žádnou pizzu s ananasem jsem si neobjednal!!! Pouze jsem chtěl čtyři druhy sýra, to je zločin? 
                    </p>
                </div>
                <span class="text-base text-gray-500 self-start"> 12:03 | včera </span>
            </div>
            <div class="grid grid-flow-col justify-between">
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="messageIcon"> 16
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="repeatIcon"> 4
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="heartIcon"> 412
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="downloadIcon">
                </span>
            </div>
        </div>
        <!-- Káně 2 -->
        <div v-if="group === 'A'" class="flex flex-col gap-6 pt-6">
            <profile-info :image="kaneMcWest" heading="Káně McWest" sub-heading="@pravy_rapper" />
            <div class="text-[1.0625rem] text-left flex flex-col gap-8">
                <p>
                    Speciál znamenal čtyři druhy sýru bez laktózy. Tohle je jediná pizzerie, která má pizzu bez laktózy, jeeeez
                </p>
            </div>
            <span class="text-base text-gray-500 self-start"> 8:15 | dnes </span>
            <div class="grid grid-flow-col justify-between">
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="messageIcon"> 72
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="repeatIcon"> 54
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="heartIcon"> 675
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="downloadIcon">
                </span>
            </div>
        </div>
        <!-- Pizza 2 -->
        <div v-else class="flex flex-col gap-6 pt-6">
            <profile-info :image="pizzaLogo" heading="Pizzerie Jablečná borovice" sub-heading="@pizza_jablecna_borovice" />
            <div class="text-[1.0625rem] text-left flex flex-col gap-8">
                <p>
                    Nechápeme kde se vůbec vzala informace, že vše se děje ve sklepě, naše budova historicky nikdy sklep neměla.
                </p>
            </div>
            <span class="text-base text-gray-500 self-start"> 8:15 | dnes </span>
            <div class="grid grid-flow-col justify-between">
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="messageIcon"> 125
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="repeatIcon"> 57
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="heartIcon"> 2 tis.
                </span>
                <span class="flex flex-row gap-2 font-medium">
                    <img :src="downloadIcon">
                </span>
            </div>
        </div>
        <span />
    </div>
</template>

<script setup lang="ts">
import profileInfo from '../../components/ProfileInfo.vue';
import pizzaLogo from '../../assets/pizza-logo.png';
import johnyEpic from '../../assets/johny-epic.png';
import kaneMcWest from '../../assets/kane-mc-west.png';
import messageIcon from '../../assets/message-icon.svg';
import repeatIcon from '../../assets/repeat-icon.svg';
import heartIcon from '../../assets/heart-icon.svg';
import downloadIcon from '../../assets/download-icon.svg';

const group = localStorage.getItem('group');
</script>