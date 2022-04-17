<template>
<div class="flex flex-1 flex-col gap-12 py-4">
    <image-large :image="pizzaPlaceClosed" class="relative -top-4" />
    <div class="text-[1.0625rem] flex flex-col gap-8 px-4">
        <p>
            Pizzerie Jablečná borovice oznámila, že svůj podnik kvůli špatné pověsti uzavře. 
        </p>
        <p>
            “Celá kauza ananasové pizzy nás postavila do špatného světla. Vše se odehrálo bez prokazatelného důkazu. Společnost nás odsoudila a nic s tím nemůžeme udělat kromě čekání, až celá kauza vychladne.” říká majitel pizzerie.
        </p>
        <p>
            Policie případ dále vyšetřuje. Oznámila ale, že došla k průlomovému odhalení.
        </p>
    </div>
</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import pizzaPlaceClosed from '../../assets/pizza-place-closed.png';
import ImageLarge from '../../components/ImageLarge.vue';

const route = useRoute();
const router = useRouter();

const group = localStorage.getItem('group')
</script>