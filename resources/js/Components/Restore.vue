<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import ActionButton from "@/Components/ActionButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref, defineEmits, inject } from "vue";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["open", "restore"]);

const show = ref(false);
const props = defineProps({
    title: String,
    item: Object,
    routeName: {
        type: String,
        required: true,
    },
    buttonText: {
        type: String,
        default: "",
    }
});

const form = useForm({});

const submit = () => {
    form.post(route(props.routeName, props.item?.id), {
        preserveScroll: true,
        onSuccess: () => {
            closeModal();
            emit("restore", props.item);
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
        <ActionButton
            variant="success"
            @click.prevent="(show = true), emit('open')"
        >
            <ArrowUturnLeftIcon class="w-4 h-auto" />
        </ActionButton>
        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.restore }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.restore_confirm }} {{ props.item?.name }}?
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
