<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = Role::create([
            'name' => 'superadmin',
            'guard_name' => 'web',
        ]);

        $superadmin->givePermissionTo([
            'user create',
            'user read',
            'user update',
            'user delete',
            'user restore',

            'role create',
            'role read',
            'role update',
            'role delete',
            'role restore',

            'permission create',
            'permission read',
            'permission update',
            'permission delete',
            'permission restore',

            'setting create',
            'setting read',
            'setting update',
            'setting delete',
            'setting restore',

            'activity create',
            'activity read',
            'activity update',
            'activity delete',
            'activity restore',

            'logs create',
            'logs read',
            'logs update',
            'logs delete',
            'logs restore',

            'backup create',
            'backup read',
            'backup update',
            'backup delete',
            'backup restore',

            'app maintenance create',
            'app maintenance read',
            'app maintenance update',
            'app maintenance delete',
            'app maintenance restore',
        ]);

        $admin = Role::create([
            'name' => 'admin',
            'guard_name' => 'web',
        ]);

        $admin->givePermissionTo([
            'user create',
            'user read',
            'user update',
            'user delete',
            'user restore',

            'role create',
            'role read',
            'role update',
            'role delete',
            'role restore',

            'permission create',
            'permission read',
            'permission update',
            'permission delete',
            'permission restore',

            'setting create',
            'setting read',
            'setting update',
            'setting delete',
            'setting restore',

            'activity create',
            'activity read',
            'activity update',
            'activity delete',
            'activity restore',
        ]);

        $operator = Role::create([
            'name' => 'operator',
            'guard_name' => 'web',
        ]);

        $operator->givePermissionTo([
            'user read',
            'user update',

            'setting read',
            'setting update',
        ]);
    }
}
