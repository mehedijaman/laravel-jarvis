<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'delete user', 'guard_name' => 'web']);
        Permission::create(['name' => 'update user', 'guard_name' => 'web']);
        Permission::create(['name' => 'read user', 'guard_name' => 'web']);
        Permission::create(['name' => 'create user', 'guard_name' => 'web']);

        Permission::create(['name' => 'delete role', 'guard_name' => 'web']);
        Permission::create(['name' => 'update role', 'guard_name' => 'web']);
        Permission::create(['name' => 'read role', 'guard_name' => 'web']);
        Permission::create(['name' => 'create role', 'guard_name' => 'web']);

        Permission::create(['name' => 'delete permission', 'guard_name' => 'web']);
        Permission::create(['name' => 'update permission', 'guard_name' => 'web']);
        Permission::create(['name' => 'read permission', 'guard_name' => 'web']);
        Permission::create(['name' => 'create permission', 'guard_name' => 'web']);
    }
}
