<script setup>
import DialogModal from '@/Components/DialogModal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { ref } from 'vue';

const show = ref(false)
const props = defineProps({
    title: String,
    permissions: Object,
})

const closeModal = () => {
    show.value = false
}
</script>
<template>
    <div>
        <div>
            <p v-tooltip="'Show permission'" class="text-primary underline cursor-pointer w-fit" @click="show = true">{{
                props.title }}</p>
        </div>
        <DialogModal :show="show" @close="closeModal">
            <template #title>
                Permission {{ props.title }}
            </template>

            <template #content>
                <div class="space-y-2">
                    <div class="grid grid-cols-2 sm:grid-cols-3">
                        <div v-for="(permission, index) in props.permissions" :key="index"
                            class="flex justify-between w-full px-4 py-2 ">
                            {{ ++index + ". " + permission.name }}
                        </div>
                    </div>
                </div>
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    CLose
                </SecondaryButton>
            </template>
        </DialogModal>
    </div>
</template>