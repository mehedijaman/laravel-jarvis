<?php

use App\Http\Controllers\DemoController;
use Illuminate\Support\Facades\Route;

/** Demo Routes */
Route::get('demos/trash', [DemoController::class, 'trash'])->name('demos.trash');
Route::delete('demos/destroy/bulk', [DemoController::class, 'destroyBulk'])->name('demos.destroy.bulk');
Route::delete('demos/{demo}/destroy/force', [DemoController::class, 'destroyForce'])->name('demos.destroy.force');
Route::delete('demos/destroy/force/bulk', [DemoController::class, 'destroyForceBulk'])->name('demos.destroy.force.bulk');
Route::delete('demos/destroy/force/all', [DemoController::class, 'destroyForceAll'])->name('demos.destroy.force.all');
Route::post('demos/{demo}/restore', [DemoController::class, 'restore'])->name('demos.restore');
Route::post('demos/restore/bulk', [DemoController::class, 'restoreBulk'])->name('demos.restore.bulk');
Route::post('demos/restore/all', [DemoController::class, 'restoreAll'])->name('demos.restore.all');
Route::resource('demos', DemoController::class);
