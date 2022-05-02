<template>
    <teleport to="body">
        <transition name="modal">
            <div v-if="open" class="fixed z-50 inset-0 overflow-y-auto" @close="$emit('close')">
                <div class="flex bg-black bg-opacity-40 items-end justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-3 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                        <h3 class="text-2xl font-moreno text-center font-semibold">
                            {{ dialog.heading }}
                        </h3>
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <p v-if="dialog.message" class="py-8 px-2 sm:px-8 text-lg text-center" v-html="dialog.message" />
                        <div v-if="dialog.password" class="py-1 mb-6">
                            <input
                                v-model="inputPassword"
                                type="text"
                                autocorrect="off"
                                autocomplete="off"
                                spellcheck="false"
                                autofocus
                                class="bg-gray-100 border-2 border-zsi-500 text-lg text-center font-bold text-zsi-700 rounded-lg focus:ring-zsi-500 focus:border-zsi-700 block w-full p-2.5"
                            >
                        </div>
                        <div class="flex flex-wrap gap-3 justify-center">
                            <button-primary @click="cancel">
                                Zrušit
                            </button-primary>
                            <button-primary :disabled="!passwordMatch" @click="confirm">
                                Potvrdit
                            </button-primary>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import ButtonPrimary from "./ButtonPrimary.vue";

const open = ref(false);
const inputPassword = ref('');
let resolvePromise: any;
let rejectPromise: any;

const dialog = reactive({
    heading: '',
    message: '',
    password: undefined as undefined | string,
});

const passwordMatch = computed(() => {
    return !!(!dialog.password) || (dialog.password === inputPassword.value);
});

const show = async (
    heading: string,
    message: string,
    password?: string,
) => {
    dialog.message = message;
    dialog.heading = heading;
    dialog.password = password;
    open.value = true;
    return new Promise((resolve, reject) => {
        resolvePromise = resolve;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rejectPromise = reject;
    });
};

defineExpose({ show });

const confirm = () => {
    if (!passwordMatch.value) return;
    open.value = false;
    resolvePromise(true);
};

const cancel = () => {
    open.value = false;
    resolvePromise(false);
};
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    display: block;
    margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
