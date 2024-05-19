<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import Table from "@/Components/Table.vue";
import Breadcrumb from "@/Layouts/Authenticated/Breadcrumb.vue";
import SelectInput from "@/Components/SelectInput.vue";
import TablePagination from "@/Components/TablePagination.vue";
import TextInput from "@/Components/TextInput.vue";
import Create from "@/Pages/User/Create.vue";
import Edit from "@/Pages/User/Edit.vue";
import Delete from "@/Components/Delete.vue";
import DeleteBulk from "@/Components/DeleteBulk.vue";
import DeleteAll from "@/Components/DeleteAll.vue";
import Permission from "@/Pages/Role/Permission.vue";
import { reactive, watch } from "vue";
import pkg from "lodash";
import { router } from "@inertiajs/vue3";
import { CheckBadgeIcon } from "@heroicons/vue/24/solid";
import { ChevronUpDownIcon } from "@heroicons/vue/24/outline";
import Checkbox from "@/Components/Checkbox.vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import { Link } from "@inertiajs/vue3";

const { _, debounce, pickBy } = pkg;
const props = defineProps({
    title: String,
    filters: Object,
    users: Object,
    roles: Object,
    breadcrumbs: Object,
    perPage: Number,
});

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
});

const order = (field) => {
    data.params.field = field;
    data.params.order = data.params.order === "asc" ? "desc" : "asc";
};

watch(
    () => _.cloneDeep(data.params),
    debounce(() => {
        let params = pickBy(data.params);
        router.get(route("users.index"), params, {
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    }, 150)
);

const selectAll = (event) => {
    if (event.target.checked === false) {
        data.selectedId = [];
    } else {
        props.users?.data.forEach((user) => {
            data.selectedId.push(user.id);
        });
    }
};
const select = () => {
    if (props.users?.data.length == data.selectedId.length) {
        data.multipleSelect = true;
    } else {
        data.multipleSelect = false;
    }
};

const calculateSerialNumber = (index) => (props.users.current_page - 1) * props.users.per_page + index + 1

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
                <div
                    class="bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"
                >
                    <Table>
                        <template #table-action>
                            <div class="flex shrink-0 rounded overflow-hidden">
                                <Create
                                    v-if="can(['user create'])"
                                    :title="props.title"
                                    :roles="props.roles"
                                />
                                <DeleteBulk
                                    v-if="
                                        data.selectedId.length != 0 &&
                                        can(['user delete'])
                                    "
                                    :selectedId="data.selectedId"
                                    :title="props.title"
                                    @close="
                                        (data.selectedId = []),
                                            (data.multipleSelect = false)
                                    "
                                    routeName="users.destroy.bulk"
                                />
                            </div>
                            <div class="flex justify-end items-center gap-2">
                                <div class="flex space-x-2">
                                    <SelectInput
                                        class="h-9 text-sm"
                                        v-model="data.params.perPage"
                                        :dataSet="$page.props.app.perpage"
                                    />
                                </div>
                                <TextInput
                                    v-model="data.params.search"
                                    type="search"
                                    class="block h-9"
                                    :placeholder="lang().placeholder.search"
                                />
                            </div>

                            <Link
                                :href="route('users.trash')"
                                class="flex items-center justify-start gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-500 rounded font-semibold text-xs text-slate-700 dark:text-slate-300 uppercase tracking-widest shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-800 disabled:opacity-25 transition ease-in-out duration-150"
                                type="button">
                                <TrashIcon class="w-4 h-auto" />
                                Trash
                            </Link>
                        </template>
                        <template #table-head>
                            <tr>
                                <th class="p-4 text-left">
                                    <Checkbox
                                        v-model:checked="data.multipleSelect"
                                        @change="selectAll"
                                    />
                                </th>
                                <th class="p-4 text-center">#</th>
                                <th
                                    class="p-4 cursor-pointer"
                                    v-on:click="order('name')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>{{ lang().label.name }}</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th
                                    class="p-4 cursor-pointer"
                                    v-on:click="order('email')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>{{ lang().label.email }}</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="p-4 text-left">
                                    {{ lang().label.role }}
                                </th>
                                <th
                                    class="p-4 cursor-pointer"
                                    v-on:click="order('created_at')"
                                >
                                    <div
                                        class="flex justify-between items-center"
                                    >
                                        <span>{{ lang().label.created }}</span>
                                        <ChevronUpDownIcon class="w-4 h-4" />
                                    </div>
                                </th>
                                <th class="p-4 text-center sr-only">Action</th>
                            </tr>
                        </template>
                        <template #table-body>
                            <tr
                                v-for="(user, index) in users.data"
                                :key="index"
                                class="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"
                            >
                                <td class="whitespace-nowrap px-4 py-2">
                                    <input
                                        class="rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"
                                        type="checkbox"
                                        @change="select"
                                        :value="user.id"
                                        v-model="data.selectedId"
                                    />
                                </td>
                                <td
                                    class="whitespace-nowrap px-4 py-2 text-center"
                                >
                                    {{ calculateSerialNumber(index) }}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    <div class="flex items-center">
                                        <div
                                            v-if="!user.profile_photo_path"
                                            class="mt-2 shrink-0"
                                        >
                                            <img
                                                :src="user.profile_photo_url"
                                                :alt="user.name"
                                                class="rounded h-8 w-8 object-cover"
                                            />
                                        </div>

                                        <!-- New Profile Photo Preview -->
                                        <div
                                            v-if="user.profile_photo_path"
                                            class="mt-2 shrink-0"
                                        >
                                            <span
                                                class="block rounded w-8 h-8 bg-cover bg-no-repeat bg-center"
                                                :style="
                                                    'background-image: url(\'' +
                                                    user.profile_photo_url +
                                                    '\');'
                                                "
                                            />
                                        </div>
                                        <p class="truncate ml-3">
                                            {{ user.name }}
                                        </p>
                                        <CheckBadgeIcon
                                            v-tooltip="
                                                'Verified at ' +
                                                user.email_verified_at
                                            "
                                            v-if="user.email_verified_at"
                                            class="w-4 h-auto text-blue-500 ml-1 shrink-0"
                                        />
                                    </div>
                                </td>
                                <td
                                    class="whitespace-nowrap truncate px-4 py-2"
                                >
                                    {{ user.email }}
                                </td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    <p v-if="user.roles[0]?.name">
                                        <Permission
                                            :permissions="
                                                user.roles[0]?.permissions
                                            "
                                            :title="user.roles[0]?.name"
                                        />
                                    </p>
                                    <p v-else>
                                        {{ lang().label.not_selected }}
                                    </p>
                                </td>
                                <td class="whitespace-nowrap px-4 py-2">
                                    {{ user.created_at }}
                                </td>
                                <td
                                    class="whitespace-nowrap flex justify-end px-4 py-2"
                                >
                                    <div
                                        class="flex w-fit rounded overflow-hidden"
                                    >
                                        <Edit
                                            v-if="can(['user update'])"
                                            :title="props.title"
                                            :user="user"
                                            @open="data.user = user"
                                            :roles="props.roles"
                                        />

                                        <Delete
                                            v-if="can(['user delete'])"
                                            :title="props.title"
                                            :item="user"
                                            routeName="users.destroy"
                                        />
                                    </div>
                                </td>
                            </tr>
                        </template>
                        <template #table-pagination>
                            <TablePagination
                                :links="props.users"
                                :filters="data.params"
                            />
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
