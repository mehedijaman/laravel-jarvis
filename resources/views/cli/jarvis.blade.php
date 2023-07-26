@props([
    'controller',
    'model',
    'migration',
    'indexRequest',
    'storeRequest',
    'updateRequest',
])
<div class="mx-2 my-1">
    <div class="my-1">
        <span class="font-bold text-green">Jarvis Resource Generated</span>

        <div class="flex space-x-1">
            <span class="font-bold">{{ $controller }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <div class="flex space-x-1">
            <span class="font-bold">{{ $model }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <div class="flex space-x-1">
            <span class="font-bold">{{ $migration }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <div class="flex space-x-1">
            <span class="font-bold">{{ $indexRequest }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <div class="flex space-x-1">
            <span class="font-bold">{{ $storeRequest }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <div class="flex space-x-1">
            <span class="font-bold">{{ $updateRequest }}</span>
            <span class="flex-1 content-repeat-[.] text-gray"></span>
            <span class="font-bold text-green uppercase">created</span>
        </div>
        <span class="text-blue mt-1">Please run 'php artisan migrate' and import the controller to app/routes/web.php</span>
    </div>
</div>