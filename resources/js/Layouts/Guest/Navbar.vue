<script setup>
import { ref } from 'vue';
import { Link, router } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import SwitchDarkMode from '@/Components/SwitchDarkMode.vue';

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>
<template>
    <nav class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center space-x-2">
                        <Link :href="route('dashboard')">
                        <ApplicationLogo class="block h-9 w-auto" />
                        </Link>
                        <p class="block sm:hidden text-lg font-semiboldt ext-slate-600 dark:text-white">{{
                            $page.props.app.name + " " + $page.props.app.version }}</p>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
                    </div>
                </div>

                <div class="hidden sm:flex sm:items-center space-x-1">
                    <SwitchDarkMode />
                    <div class="relative">
                        <!-- Teams Dropdown -->
                        <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                            <template #trigger>
                                <span class="inline-flex rounded">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition ease-in-out duration-150">
                                        {{ $page.props.auth.user.current_team.name }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <div class="w-60">
                                    <!-- Team Management -->
                                    <template v-if="$page.props.jetstream.hasTeamFeatures">
                                        <div class="block px-4 py-2 text-xs text-slate-400">
                                            Manage Team
                                        </div>

                                        <!-- Team Settings -->
                                        <DropdownLink :href="route('teams.show', $page.props.auth.user.current_team)">
                                            Team Settings
                                        </DropdownLink>

                                        <DropdownLink v-if="$page.props.jetstream.canCreateTeams"
                                            :href="route('teams.create')">
                                            Create New Team
                                        </DropdownLink>

                                        <div class="border-t border-slate-200 dark:border-slate-600" />

                                        <!-- Team Switcher -->
                                        <div class="block px-4 py-2 text-xs text-slate-400">
                                            Switch Teams
                                        </div>

                                        <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                                            <form @submit.prevent="switchToTeam(team)">
                                                <DropdownLink as="button">
                                                    <div class="flex items-center">
                                                        <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                            class="mr-2 h-5 w-5 text-green-400"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>

                                                        <div>{{ team.name }}</div>
                                                    </div>
                                                </DropdownLink>
                                            </form>
                                        </template>
                                    </template>
                                </div>
                            </template>
                        </Dropdown>
                    </div>

                    <!-- Settings Dropdown -->
                    <div class="relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button v-if="$page.props.jetstream.managesProfilePhotos"
                                    class="flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-slate-300 transition">
                                    <img class="h-8 w-8 rounded object-cover" :src="$page.props.auth.user.profile_photo_url"
                                        :alt="$page.props.auth.user.name">
                                </button>

                                <span v-else class="inline-flex rounded">
                                    <button type="button"
                                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition ease-in-out duration-150">
                                        {{ $page.props.auth.user.name }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </span>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <div class="block px-4 py-2 text-xs text-slate-400">
                                    Manage Account
                                </div>

                                <DropdownLink :href="route('profile.show')">
                                    Profile
                                </DropdownLink>

                                <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                                    API Tokens
                                </DropdownLink>

                                <div class="border-t border-slate-200 dark:border-slate-600" />

                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <DropdownLink as="button">
                                        Log Out
                                    </DropdownLink>
                                </form>
                            </template>
                        </Dropdown>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button
                        class="inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out"
                        @click="showingNavigationDropdown = !showingNavigationDropdown">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path
                                :class="{ 'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }" class="sm:hidden">
            <div class="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <!-- Responsive Settings Options -->
            <div class="pt-4 pb-1 border-t border-slate-200 dark:border-slate-600">
                <div class="flex items-center px-4">
                    <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 mr-3">
                        <img class="h-10 w-10 rounded object-cover" :src="$page.props.auth.user.profile_photo_url"
                            :alt="$page.props.auth.user.name">
                    </div>

                    <div>
                        <div class="font-medium text-base text-slate-800 dark:text-slate-200">
                            {{ $page.props.auth.user.name }}
                        </div>
                        <div class="font-medium text-sm text-slate-500">
                            {{ $page.props.auth.user.email }}
                        </div>
                    </div>
                </div>

                <div class="mt-3 space-y-1">
                    <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
                        Profile
                    </ResponsiveNavLink>

                    <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')"
                        :active="route().current('api-tokens.index')">
                        API Tokens
                    </ResponsiveNavLink>

                    <!-- Authentication -->
                    <form method="POST" @submit.prevent="logout">
                        <ResponsiveNavLink as="button">
                            Log Out
                        </ResponsiveNavLink>
                    </form>

                    <!-- Team Management -->
                    <template v-if="$page.props.jetstream.hasTeamFeatures">
                        <div class="border-t border-slate-200 dark:border-slate-600" />

                        <div class="block px-4 py-2 text-xs text-slate-400">
                            Manage Team
                        </div>

                        <!-- Team Settings -->
                        <ResponsiveNavLink :href="route('teams.show', $page.props.auth.user.current_team)"
                            :active="route().current('teams.show')">
                            Team Settings
                        </ResponsiveNavLink>

                        <ResponsiveNavLink v-if="$page.props.jetstream.canCreateTeams" :href="route('teams.create')"
                            :active="route().current('teams.create')">
                            Create New Team
                        </ResponsiveNavLink>

                        <div class="border-t border-slate-200 dark:border-slate-600" />

                        <!-- Team Switcher -->
                        <div class="block px-4 py-2 text-xs text-slate-400">
                            Switch Teams
                        </div>

                        <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                            <form @submit.prevent="switchToTeam(team)">
                                <ResponsiveNavLink as="button">
                                    <div class="flex items-center">
                                        <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                            class="mr-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>{{ team.name }}</div>
                                    </div>
                                </ResponsiveNavLink>
                            </form>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>