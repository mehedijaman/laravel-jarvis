<script setup>
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import ActionButton from "@/Components/ActionButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["open", "delete"]);

const show = ref(false);
const props = defineProps({
    title: String,
    buttonText:{
        type: String,
        default: '',
    },
    item: {
        type: Object,
        required: true,
    },
    routeName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    }
});

const form = useForm({});

const submit = () => {
    form.delete(route(props.routeName, props.item.id), {
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
        <ActionButton
            v-tooltip="lang().label.delete"
            variant="danger"
            @click.prevent="(show = true), emit('open')"
        >
            <TrashIcon class="w-4 h-auto" />
            {{ props.buttonText }}
        </ActionButton>

        <ConfirmationModal :show="show" @close="closeModal">
            <template #title>
                {{ lang().label.delete }} {{ props.title }}
            </template>

            <template #content>
                {{ lang().label.delete_confirm }} ? {{ props.description }}
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
