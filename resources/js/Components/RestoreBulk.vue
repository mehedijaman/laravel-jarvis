<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, watchEffect } from "vue";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["close", "restore"]);
const show = ref(false);
const props = defineProps({
    title: String,
    selectedId: Object,
    routeName: {
        type: String,
        required: true
    },
    buttonText:{
        type: String,
        default: '',
    },
});

const form = useForm({
    id: [],
});

watchEffect(() => {
    if (show) {
        form.id = props.selectedId;
    }
});

const submit = () => {
    form.post(route(props.routeName), {
        preserveScroll: true,
        onSuccess: () => {
            emit("close");
            emit("restore",  props.selectedId);
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
        <PrimaryButton
            class="rounded-none"
            @click.prevent="show = true"
        >
            <ArrowUturnLeftIcon class="w-4 h-auto" />
            {{ props.buttonText }}
        </PrimaryButton>
        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.restore_selected }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.restore_confirm }}
                {{ props.selectedId?.length }} {{ props.title }}?
            </template>

            <template #footer>
                <SecondaryButton @click="closeModal">
                    {{ lang().button.cancel }}
                </SecondaryButton>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="submit"
                >
                    {{ lang().button.restore }}
                    {{ form.processing ? "..." : "" }}
                </PrimaryButton>
            </template>
        </ConfirmationModal>
    </div>
</template>
