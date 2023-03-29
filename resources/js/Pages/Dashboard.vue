<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import Breadcrumb from '@/Layouts/Authenticated/Breadcrumb.vue';
Breadcrumb
</script>

<template>
    <AppLayout title="Dashboard">
        <template #title>
            <span>Dashboard</span>
        </template>
        <template #breadcrumb>
            <Breadcrumb />
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded">
                    <Welcome />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
