<template>
    <div class="flex h-full flex-1 flex-col justify-between py-4">
        <image-large :image="zsiLogo" class="h-12" />
        <div class="flex flex-col gap-14">
            <heading-primary> Vyřeš pizza záhadu </heading-primary>
            <div class="flex flex-col gap-8 items-center">
                <button-primary @click="selectGroup('A')">
                    Skupina A
                </button-primary>
                <button-primary @click="selectGroup('B')">
                    Skupina B
                </button-primary>
            </div>
        </div>
        <router-link class="text-zsi-500 text-lg font-moreno font-semibold" :to="{ name: 'Game' }">
            Pro učitele
        </router-link>
    </div>
    <confirm-modal ref="confirm" />
</template>

<script setup lang="ts">
import ButtonPrimary from "../components/ButtonPrimary.vue";
import zsiLogo from "../assets/zsi-logo.png";
import { useRouter } from "vue-router";
import ImageLarge from "../components/ImageLarge.vue";
import HeadingPrimary from "../components/HeadingPrimary.vue";
import ConfirmModal from "../components/ConfirmModal.vue";
import { ref } from "vue";

const router = useRouter();
const confirm = ref(
    null as null | {
        show: (heading: string, message: string) => Promise<boolean>;
    }
);

const selectGroup = async (group: "A" | "B") => {
    if (
        !(await confirm.value!.show(
            "Potvrdit skupinu",
            `Opravdu si přejete zvolit skupinu ${group}? <br> Tuto volbu nebude možné změnit.`
        ))
    )
        return;
    localStorage.setItem("group", group);
    localStorage.setItem("lockedUntil", (Date.now() + 900000).toString());
    router.push({ name: "Intro" });
};
</script>
