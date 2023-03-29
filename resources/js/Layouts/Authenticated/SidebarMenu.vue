<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { KeyIcon, ShieldCheckIcon, Squares2X2Icon, UserIcon } from '@heroicons/vue/24/solid';
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <div class="text-white">
        <div class="flex justify-center items-center border-b border-white/10 h-16 max-w-full px-3">
            <Link :href="route('dashboard')" class="flex w-full justify-start items-center space-x-4">
            <ApplicationLogo :mode="'light'" class="block fill-current h-8 w-auto" />
            <p class="block text-lg font-semibold truncate">{{
                $page.props.app.name }}</p>
            </Link>
        </div>
        <ol class="pb-24 pt-6 space-y-2 px-3">
            <li>
                <span class="font-md uppercase font-semibold">{{ lang().label.main_menu }}</span>
            </li>
            <li v-bind:class="route().current('dashboard') ? 'border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30' : ''"
                class="hover:bg-white/20 rounded dark:hover:bg-primary/30">
                <Link :href="route('dashboard')" class="flex items-center py-1.5 px-3 space-x-2">
                <Squares2X2Icon class="w-5 h-auto" />
                <span>{{ lang().label.dashboard }}</span>
                </Link>
            </li>
            <li v-show="can(['read user', 'read role', 'read permission'])">
                <span class="font-md uppercase font-semibold">{{ lang().label.data }}</span>
            </li>
            <li v-show="can(['read user'])"
                v-bind:class="route().current('user.index') ? 'border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30' : ''"
                class="hover:bg-white/20 rounded dark:hover:bg-primary/30">
                <Link :href="route('user.index')" class="flex items-center py-1.5 px-3 space-x-2">
                <UserIcon class="w-5 h-auto" />
                <span>{{ lang().label.user }}</span>
                </Link>
            </li>
            <li v-show="can(['read role'])"
                v-bind:class="route().current('role.index') ? 'border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30' : ''"
                class="hover:bg-white/20 rounded dark:hover:bg-primary/30">
                <Link :href="route('role.index')" class="flex items-center py-1.5 px-3 space-x-2">
                <KeyIcon class="w-5 h-auto" />
                <span>{{ lang().label.role }}</span>
                </Link>
            </li>
            <li v-show="can(['read permission'])"
                v-bind:class="route().current('permission.index') ? 'border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30' : ''"
                class="hover:bg-white/20 rounded dark:hover:bg-primary/30">
                <Link :href="route('permission.index')" class="flex items-center py-1.5 px-3 space-x-2">
                <ShieldCheckIcon class="w-5 h-auto" />
                <span>{{ lang().label.permission }}</span>
                </Link>
            </li>
        </ol>
    </div>
</template>