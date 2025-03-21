<script setup>
import Delete from "@/Components/Delete.vue";
import DeleteBulk from "@/Components/DeleteBulk.vue";
import DeleteAll from "@/Components/DeleteAll.vue";
import Restore from "@/Components/Restore.vue";
import RestoreBulk from "@/Components/RestoreBulk.vue";
import RestoreAll from "@/Components/RestoreAll.vue";

import { ref, reactive, defineProps, computed } from "vue";
import { formatDate } from "@/Helpers/dateHelper";
import EmptyAnimation from "@/Components/Animations/Empty.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import { Link } from "@inertiajs/vue3";
import Breadcrumb from "@/Layouts/Authenticated/Breadcrumb.vue";

import {
    MagnifyingGlassIcon,
    BackwardIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
    title: String,
    users: Object,
    breadcrumbs: Object,
});
const items = reactive(props.users);

const itemsSelected = ref([]);
const rowsPerPage = ref(10);
const searchField = ref('');
const searchValue = ref('');

const headers = [
    { text: "Name", value: "name", sortable: true },
    { text: "Email", value: "email", sortable: true, format: val => formatDate(new Date(val)) },
    { text: "Created", value: "created_at", sortable: true, format: val => formatDate(new Date(val)) },
    { text: "Action", value: "actions" },
];

const selectedIds = computed(() => itemsSelected.value.map(item => item.id));

// Method to remove an item from the array based on its ID
const removeItem = (itemId) => {
    // Find the index of the item in the items array
    const index = items.findIndex(item => item.id === itemId);

    // Remove the item if found
    if (index !== -1) {
        items.splice(index, 1);
    }
};

const removeBulkItems = (itemIds) => {
    // Iterate over the array of item IDs
    itemIds.forEach(itemId => {
        // Find the index of the item in the items array
        const index = items.findIndex(item => item.id === itemId);

        // Remove the item if found
        if (index !== -1) {
            items.splice(index, 1);
        }
    });
};


const removeAllItems = () => {
    // Remove all items from the items array
    items.splice(0, items.length);
};

const handleDelete = (deletedItem) => {
    removeItem(deletedItem.id);
};

const handleBulkDelete = (deletedItems) => {
    removeBulkItems(deletedItems);
};
</script>
<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <Breadcrumb :breadcrumbs="props.breadcrumbs"/>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2">
                    <div class="flex justify-between">
                        <div class="flex shrink-0 rounded overflow-hidden">
                            <Link
                                class="inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8"
                                :href="route('users.index')">
                                <BackwardIcon class="w-5 h-5 ">
                                </BackwardIcon>
                                Back
                            </Link>

                            <RestoreAll v-show="can(['user delete'])" routeName="users.restore.all" @restore="removeAllItems" buttonText="Restore All"></RestoreAll>

                            <DeleteAll v-show="can(['user delete'])" routeName="users.destroy.force.all" @delete="removeAllItems" buttonText="Empty Trash" />

                            <RestoreBulk v-if="itemsSelected.length != 0 && can(['user delete'])"
                                :itemsSelected="itemsSelected" title="Items" routeName="users.restore.bulk" @restore="handleBulkDelete" />

                            <DeleteBulk v-if="itemsSelected.length != 0 && can(['user delete'])"
                                :selectedId="selectedIds" title="Items" routeName="users.destroy.force.bulk" @delete="handleBulkDelete"/>
                        </div>
                        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2">
                            <div class="relative ">
                                <div
                                    class="absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                                    <MagnifyingGlassIcon class="w-5 h-5 text-gray-500 dark:text-gray-400">
                                    </MagnifyingGlassIcon>
                                </div>
                                <input type="text" v-model="searchValue"
                                    class="block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items">
                            </div>
                        </div>
                    </div>
                    <EasyDataTable class="mt-2" :rows-per-page="rowsPerPage" show-index alternating border-cell
                        buttons-pagination :headers="headers" :items="items" :search-field="searchField"
                        :search-value="searchValue" v-model:items-selected="itemsSelected">

                        <template #empty-message>
                            <EmptyAnimation></EmptyAnimation>
                        </template>

                        <template #item-actions="item">
                            <div class="flex w-fit rounded overflow-hidden">
                                <Restore v-show="can(['user delete'])" :title="item.name" :item="item"
                                    @open="item = item" routeName="users.restore" @restore="handleDelete" />

                                <Delete v-show="can(['user delete'])" :title="item.name" :item="item"
                                    @open="item = item" routeName="users.destroy.force" @delete="handleDelete" />
                            </div>
                        </template>
                    </EasyDataTable>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
