<script setup>
import ConfirmationModal from '@/Components/ConfirmationModal.vue';
import DangerButton from '@/Components/DangerButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { useForm } from '@inertiajs/vue3';
import { ref, watchEffect } from 'vue';
import { TrashIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits(['close'])
const show = ref(false)
const props = defineProps({
    title: String,
    selectedId: Object,
})

const form = useForm({
    id: []
})

watchEffect(() => {
    if (show) {
        form.id = props.selectedId
    }
})

const submit = () => {
    form.post(route('role.destroy-bulk'), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal()
            emit('close')
        },
        onError: () => null,
        onFinish: () => null,
    })
}

const closeModal = () => {
    show.value = false
}
</script>
<template>
    <div>
        <DangerButton v-tooltip="'Delete selected'" class="rounded-none" @click.prevent="show = true">
            <TrashIcon class="w-4 h-auto" />
        </DangerButton>
        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                Delete Selected {{ props.title }}
            </template>

            <template #content>
                Are you sure you would like to delete {{ props.selectedId?.length }} {{ props.title }}?
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    Cancel
                </SecondaryButton>

                <DangerButton class="ml-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                    @click="submit">
                    Delete {{ form.processing ? '...' : '' }}
                </DangerButton>
            </template>
        </ConfirmationModal>
    </div>
</template>