<script setup></script>

<template>
    <div>
        <div
            class="flex justify-between items-center p-2 space-x-2 overflow-x-auto"
        >
            <slot name="table-action" />
        </div>
        <div class="overflow-x-auto">
            <table class="w-full">
                <thead
                    class="uppercase text-sm border-t border-slate-200 dark:border-slate-700 dark:bg-slate-900/50"
                >
                    <slot name="table-head" />
                </thead>
                <tbody>
                    <slot name="table-body" />
                </tbody>
            </table>
        </div>
        <div
            class="flex justify-between items-center p-2 border-t border-slate-200 dark:border-slate-700 overflow-auto"
        >
            <slot name="table-pagination" />
        </div>
    </div>
</template>
