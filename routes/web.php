<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [GuestController::class, 'index'])->name('index');

Route::get('/set-locale/{locale}', function ($locale) {
    Session::put('locale', $locale);

    return back();
})->name('set-locale');

Route::prefix('/admin')->middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /** User Routes */
    Route::get('users/trash', [UserController::class, 'trash'])->name('users.trash');
    Route::delete('users/destroy/bulk', [UserController::class, 'destroyBulk'])->name('users.destroy.bulk');
    Route::delete('users/{user}/destroy/force', [UserController::class, 'destroyForce'])->name('users.destroy.force');
    Route::delete('users/destroy/force/bulk', [UserController::class, 'destroyForceBulk'])->name('users.destroy.force.bulk');
    Route::delete('users/destroy/force/all', [UserController::class, 'destroyForceAll'])->name('users.destroy.force.all');
    Route::post('users/{user}/restore', [UserController::class, 'restore'])->name('users.restore');
    Route::post('users/restore/bulk', [UserController::class, 'restoreBulk'])->name('users.restore.bulk');
    Route::post('users/restore/all', [UserController::class, 'restoreAll'])->name('users.restore.all');
    Route::resource('users', UserController::class)->except('create', 'show', 'edit');

    /* Role Routes */
    Route::get('users/roles/trash', [RoleController::class, 'trash'])->name('roles.trash');
    Route::delete('users/roles/destroy/bulk', [RoleController::class, 'destroyBulk'])->name('roles.destroy.bulk');
    Route::delete('users/roles/{role}/destroy/force', [RoleController::class, 'destroyForce'])->name('roles.destroy.force');
    Route::delete('users/roles/destroy/force/bulk', [RoleController::class, 'destroyForceBulk'])->name('roles.destroy.force.bulk');
    Route::delete('users/roles/destroy/force/all', [RoleController::class, 'destroyForceAll'])->name('roles.destroy.force.all');
    Route::post('users/roles/{role}/restore', [RoleController::class, 'restore'])->name('roles.restore');
    Route::post('users/roles/restore/bulk', [RoleController::class, 'restoreBulk'])->name('roles.restore.bulk');
    Route::post('users/roles/restore/all', [RoleController::class, 'restoreAll'])->name('roles.restore.all');
    Route::resource('users/roles', RoleController::class)->except('create', 'show', 'edit');

    /* Permission Routes */
    Route::get('users/permissions/trash', [PermissionController::class, 'trash'])->name('permissions.trash');
    Route::delete('users/permissions/destroy/bulk', [PermissionController::class, 'destroyBulk'])->name('permissions.destroy.bulk');
    Route::delete('users/permissions/{role}/destroy/force', [PermissionController::class, 'destroyForce'])->name('permissions.destroy.force');
    Route::delete('users/permissions/destroy/force/bulk', [PermissionController::class, 'destroyForceBulk'])->name('permissions.destroy.force.bulk');
    Route::delete('users/permissions/destroy/force/all', [PermissionController::class, 'destroyForceAll'])->name('permissions.destroy.force.all');
    Route::post('users/permissions/{role}/restore', [PermissionController::class, 'restore'])->name('permissions.restore');
    Route::post('users/permissions/restore/bulk', [PermissionController::class, 'restoreBulk'])->name('permissions.restore.bulk');
    Route::post('users/permissions/restore/all', [PermissionController::class, 'restoreAll'])->name('permissions.restore.all');
    Route::resource('users/permissions', PermissionController::class)->except('create', 'show', 'edit');

    /* Activity Log Routes */
    Route::resource('users/activity', ActivityController::class)->except('create', 'show', 'edit', 'store', 'update');
    Route::delete('users/activity/destroy/bulk', [ActivityController::class, 'destroyBulk'])->name('activity.destroy.bulk');

    /* Setting Routes */
    Route::resource('settings', SettingController::class)->except('create', 'store', 'show', 'edit', 'destory');

    require __DIR__.'/jarvis.php';
});
