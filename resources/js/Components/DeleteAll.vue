<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, inject } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["close", "delete"]);

const show = ref(false);

const props = defineProps({
    title: String,
    routeName: {
        type: String,
        required: true
    },
    buttonText:{
        type: String,
        default: '',
    },
});

const form = useForm({});

const submit = () => {
    form.delete(route(props.routeName), {
        preserveScroll: true,
        onSuccess: () => {
            emit("delete", props.item);
            emit('close');
            closeModal();
        },
        onError: () => null,
        onFinish: () => null,
    });
};

const closeModal = () => {
    show.value = false;
};
</script>
<template>
    <div>
        <DangerButton
            class="rounded-none"
            @click.prevent="show = true"
        >
            <TrashIcon class="w-4 h-auto" />
            {{ props.buttonText }}
        </DangerButton>
        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.delete_selected }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.delete_confirm }}
                {{ props.selectedId?.length }} {{ props.title }}?
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>

                <DangerButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    {{ lang().button.delete }}
                    {{ form.processing ? "..." : "" }}
                </DangerButton>
            </template>
        </ConfirmationModal>
    </div>
</template>
