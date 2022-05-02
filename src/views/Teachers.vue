<template>
    <div v-if="accessConfirmed" class="flex h-full flex-1 flex-col justify-between gap-9 py-4">
        <image-large :image="zsiLogo" class="h-12" />
        <div class="flex flex-col gap-14">
            <heading-primary> Zadání pro učitele </heading-primary>
        </div>
        <div class="flex flex-col gap-6 text-left">
            <p>
                V rámci této aktivity se žáci seznámí s tématem dezinformací. Na začátku se rozdělí do dvou přibližně stejně velkých skupin. Na vás je určit, která skupina je "A" a která "B". V rámci skupiny si žáci připraví chytrý telefon, s jehož pomocí cvičení absolvují. Vy jim následně v krátkosti vysvětlete zadání.
            </p>
            <p>
                Pro vysvětlení úkolu ukažte žákům pouze první slide, který je pro obě skupiny totožný. To v nich má vyvolat domněnku, že mají identická zadání.
            </p>
            <p>
                Následně obě skupiny pracují samostatně se svým zadáním. Neměly by mezi sebou jakkoliv interagovat, aby nedošlo k prozrazení detailů. Žáci se snaží pomocí indicií vyřešit pizza záhadu a odhalit "co se skutečně stalo". 
            </p>
            <p>
                Po 10-15 minutách by měli zástupci obou skupin zbytku třídy vysvětlit, k jakým závěrům došli a podložit je věcnými argumenty.
            </p>
            <p>
                V případě, že cvičení probíhá podle plánu, dojdou tyto dvě skupiny k odlišným výsledkům. Následovat by měla diskuze o tom, proč k této neshodě došlo.
            </p>
            <p>
                Důvod? Každá skupina obdržela velmi podobné informace. Ty byly však podané jiným způsobem a zahrnovaly různé méně či více podstatné detaily, které mohly zkreslit výsledný názor žáků na to, jak se kauza odehrála.
            </p>
            <p>
                Žáci by měli cvičení dostatečně zreflektovat formou skupinové diskuze. Tato diskuze by měla být věcná a žáci by během ní měli být schopni porovnat obě zadání a uvědomit si, v čem se lišily. Cvičení může fungovat jako úvod k přednášce o dezinformacích či podobných tématech. Celá aktivita včetně diskuze by měla trvat přibližně 20 až 30 minut.
            </p>
        </div> 
        <div class="flex flex-col items-center">
            <button-primary @click="router.push({ name: 'Home' })">
                Zpět do menu
            </button-primary>
        </div>
    </div>
    <confirm-modal ref="confirm" />
</template>

<script setup lang="ts">
import zsiLogo from "../assets/zsi-logo.png";
import ImageLarge from "../components/ImageLarge.vue";
import HeadingPrimary from "../components/HeadingPrimary.vue";
import ConfirmModal from "../components/ConfirmModal.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";

const accessConfirmed = ref(false);

const router = useRouter();
const confirm = ref(
    null as null | {
        show: (heading: string, message: string, password?: string) => Promise<boolean>;
    }
);

onMounted(async () => {
    if (
        !(await confirm.value!.show(
            'Vložte učitelské heslo',
            'Jste-li opravdu učitel, vložte prosím nejprve své učitelské heslo. Je k dostální od kteréhokoli člena Zvolsi.info.',
            'zsi2022ucitele'
        ))
    )
        return router.push({ name: 'Home' });
    accessConfirmed.value = true;
});
</script>
