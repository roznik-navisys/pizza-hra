<template>
<div class="flex flex-1 flex-col gap-8 py-4">
    <image-large class="-mx-8" :image="pizzaPlace" />
    <heading-primary>
        Nelegální pizza?
    </heading-primary>        
    <span class="text-zsi-500 text-base font-semibold ">
        {{ group === 'A' ? 'Včera' : 'Předevčírem' }}, 8:00
    </span>
    <hr class="w-28 mx-auto border-t border-gray-500" />
    <div class="text-[1.0625rem] flex flex-col gap-8 px-4 relative">
        <p>
            Majitelé podniku Jablečná borovice byli nařčeni, že ve svém sklepě nelegálně pěstují ananasy, které pak servírují na svých pizzách.
        </p>
        <p>
            Lidé jsou z těchto praktik pobouřeni. Ve společnosti totiž převládá názor, že ananas na pizzu nepatří. Někteří takové postupy označují dokonce za gastronomický zločin.
        </p>
        <span class="w-full h-32 bg-gradient-to-t from-white to-white/0 absolute bottom-0" />
    </div>
    <div class="px-4 flex flex-col gap-4">
        <hr class="mx-auto border-t-2 border-gray-300 w-full" />
        <span class="text-gray-600 text-base font-medium">
            Přečtěte si celý článek jen za 29 Kč.
        </span>
    </div>
</div>
</template>

<script setup lang="ts">
import pizzaPlace from '../../assets/pizza-place.png';
import HeadingPrimary from '../../components/HeadingPrimary.vue';
import ImageLarge from '../../components/ImageLarge.vue';

const group = localStorage.getItem('group')
</script>