<script setup>
import SwitchLocale from "@/Components/SwitchLocale.vue";
import SwitchDarkMode from "@/Components/SwitchDarkMode.vue";
import AuthenticationIllustration from "@/Components/AuthenticationIllustration.vue";
</script>
<template>
    <div
        class="min-h-screen flex flex-col justify-center items-center pt-0 bg-slate-100 dark:bg-slate-900 space-y-4"
    >
        <div
            class="w-full sm:max-w-3xl bg-white dark:bg-slate-800 shadow-md overflow-hidden sm:rounded sm:grid sm:grid-cols-2"
        >
            <div class="px-6 py-8 space-y-4">
                <div class="w-full flex justify-between items-center">
                    <div class="flex justify-start items-center space-x-2">
                        <slot name="logo" />
                        <p class="text-slate-600 dark:text-slate-400 text-xl">
                            {{ $page.props.app.setting.name }}
                        </p>
                    </div>
                    <div class="flex justify-between items-center gap-1">
                        <SwitchLocale />
                        <SwitchDarkMode />
                    </div>
                </div>
                <slot />
            </div>
            <div
                class="bg-primary hidden dark:bg-primary sm:flex justify-center items-center"
            >
                <AuthenticationIllustration class="w-56 h-auto" />
            </div>
        </div>
    </div>
</template>
