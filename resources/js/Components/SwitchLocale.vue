<script setup>
import { Link } from '@inertiajs/vue3'
import { usePage } from '@inertiajs/vue3';
const locale = usePage().props.app.locale;
const localeName = locale.toUpperCase();

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
<template>
    <Menu v-tooltip="lang().label.set_locale" as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center rounded-md bg-violet-400 px-4 py-2 text-sm font-medium text-white hover:bg-violet-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                {{ localeName }}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd" />
                </svg>

            </MenuButton>
        </div>

        <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
            <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">

                    <Link :href="route('set-locale', 'en')" :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]">
                    <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    English

                    </Link>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">

                    <Link :href="route('set-locale', 'id')" :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]">
                    <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    Bahasa Indonesia

                    </Link>
                    </MenuItem>

                    <MenuItem v-slot="{ active }">

                    <Link :href="route('set-locale', 'bn')" :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    ]">
                    <EditIcon :active="active" class="mr-2 h-5 w-5 text-violet-400" aria-hidden="true" />
                    বাংলা
                    </Link>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>
