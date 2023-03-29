<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Table from '@/Components/Table.vue';
import Breadcrumb from '@/Layouts/Authenticated/Breadcrumb.vue';
import SelectInput from '@/Components/SelectInput.vue';
import TablePagination from '@/Components/TablePagination.vue';
import TextInput from '@/Components/TextInput.vue';
import Create from '@/Pages/User/Create.vue';
import Edit from '@/Pages/User/Edit.vue';
import Delete from '@/Pages/User/Delete.vue';
import Permission from '@/Pages/Role/Permission.vue';
import { reactive, watch } from 'vue';
import pkg from 'lodash';
import { router } from '@inertiajs/vue3';
import { ChevronUpDownIcon } from '@heroicons/vue/24/solid';
import Checkbox from '@/Components/Checkbox.vue';
import DeleteBulk from './DeleteBulk.vue';

const { _, debounce, pickBy } = pkg
const props = defineProps({
    title: String,
    filters: Object,
    users: Object,
    roles: Object,
    breadcrumbs: Object,
    perPage: Number,
})

const data = reactive({
    params: {
        search: props.filters.search,
        field: props.filters.field,
        order: props.filters.order,
        perPage: props.perPage,
    },
    selectedId: [],
    multipleSelect: false,
    user: null,
})

const order = (field) => {
    data.params.field = field
    data.params.order = data.params.order === "asc" ? "desc" : "asc"
}

watch(() => _.cloneDeep(data.params), debounce(() => {
    let params = pickBy(data.params)
    router.get(route("user.index"), params, {
        replace: true,
        preserveState: true,
        preserveScroll: true,
    })
}, 150))

const selectAll = (event) => {
    if (event.target.checked === false) {
        data.selectedId = []
    } else {
        props.users?.data.forEach((user) => {
            data.selectedId.push(user.id)
        })
    }
}
const select = () => {
    if (props.users?.data.length == data.selectedId.length) {
        data.multipleSelect = true
    } else {
        data.multipleSelect = false
    }
}
</script>

<template>
    <AppLayout :title="props.title">
        <template #title>
            <span>{{ props.title }}</span>
        </template>
        <template #breadcrumb>
            <Breadcrumb />
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded">
                    <Table>
                        <template #table-action>
                            <div class="flex rounded overflow-hidden">
                                <Create v-show="can(['create user'])" :title="props.title" :roles="props.roles" />
                                <DeleteBulk v-show="data.selectedId.length != 0 && can(['delete user'])"
                                    :selectedId="data.selectedId" :title="props.title"
                                    @close="data.selectedId = [], data.multipleSelect = false" />
                            </div>
                            <div class="flex justify-end items-center gap-2 w-3/6 md:w-2/6 lg:w-1/6">
                                <div class="flex space-x-2">
                                    <SelectInput class="h-9 text-sm" v-model="data.params.perPage"
                                        :dataSet="$page.props.app.perpage" />
                                </div>
                                <TextInput v-model="data.params.search" type="text" class="block h-9"
                                    placeholder="Search" />
                            </div>
                        </template>
                        <template #table-head>
                            <tr>
                                <th class="px-2 py-4 text-center">
                                    <Checkbox v-model:checked="data.multipleSelect" @change="selectAll" />
                                </th>
                                <th class="px-2 py-4 text-center">#</th>
                                <th class="px-2 py-4 cursor-pointer" v-on:click="order('name')">
                                    <div class="flex justify-between items-center">
                                        <span>Name</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="px-2 py-4 cursor-pointer" v-on:click="order('email')">
                                    <div class="flex justify-between items-center">
                                        <span>Email</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="px-2 py-4 text-left">Role</th>
                                <th class="px-2 py-4 cursor-pointer" v-on:click="order('created_at')">
                                    <div class="flex justify-between items-center">
                                        <span>Created</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="px-2 py-4 text-center sr-only">Action</th>
                            </tr>
                        </template>
                        <template #table-body>
                            <tr v-for="(user, index) in users.data" :key="index"
                                class="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20">
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">
                                    <input
                                        class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"
                                        type="checkbox" @change="select" :value="user.id" v-model="data.selectedId" />
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3 text-center">{{ ++index }}</td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">{{ user.name }}</td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">{{ user.email }}</td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    <p v-if="user.roles[0]?.name">
                                        <Permission :permissions="user.roles[0]?.permissions"
                                            :title="user.roles[0]?.name" />
                                    </p>
                                    <p v-else>not selected</p>
                                </td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">{{ user.created_at }}</td>
                                <td class="whitespace-nowrap py-4 px-2 sm:py-3">
                                    <div class="flex w-fit rounded overflow-hidden">
                                        <Edit v-show="can(['update user'])" :title="props.title" :user="data.user"
                                            @open="data.user = user" :roles="props.roles" />
                                        <Delete v-show="can(['delete user'])" :title="props.title" :user="data.user"
                                            @open="data.user = user" :roles="props.roles" />
                                    </div>
                                </td>
                            </tr>
                        </template>
                        <template #table-pagination>
                            <TablePagination :links="props.users" :filters="data.params" />
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
