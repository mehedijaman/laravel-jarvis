<?php

namespace App\Console\Commands;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use function Termwind\{render};

class Jarvis extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jarvis:generate {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate resource model app';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
        $name = ucfirst($this->argument('name'));

        $this->makeDir(resource_path("/js/Pages/{$name}"));
        $this->makeDir(app_path("/Http/Requests/{$name}"));

        Permission::create(['name' => strtolower($name).' create', 'guard_name' => 'web']);
        Permission::create(['name' => strtolower($name).' read', 'guard_name' => 'web']);
        Permission::create(['name' => strtolower($name).' update', 'guard_name' => 'web']);
        Permission::create(['name' => strtolower($name).' delete', 'guard_name' => 'web']);
        Permission::create(['name' => strtolower($name).' restore', 'guard_name' => 'web']);

        $superadmin = Role::where(['name' => 'superadmin'])->first();

        $superadmin->givePermissionTo([
            strtolower($name).' create',
            strtolower($name).' read',
            strtolower($name).' update',
            strtolower($name).' delete',
            strtolower($name).' restore',
        ]);

        render(view('cli.jarvis',
            [
                'controller' => $this->controller($name),
                'model' => $this->model($name),
                'migration' => $this->migration($name),
                'indexRequest' => $this->indexRequest($name),
                'storeRequest' => $this->storeRequest($name),
                'updateRequest' => $this->updateRequest($name),
                'pageIndex' => $this->pageIndex($name),
                'pageCreate' => $this->pageCreate($name),
                'pageTrash' => $this->pageTrash($name),
                'pageEdit' => $this->pageEdit($name),
                'permission' => strtolower($name).' permission',
                'route' => $this->route($name),
            ])->render()
        );

        return self::SUCCESS;
    }

    protected function controller($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNamePlural}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                Str::plural($name),
                strtolower($name),
                strtolower(Str::plural($name)),
            ],
            $this->getStub('Controller')
        );
        file_put_contents(app_path("/Http/Controllers/{$name}Controller.php"), $params);

        return "app/Http/Controllers/{$name}Controller.php";
    }

    protected function model($name): string
    {
        $params = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}'],
            [$name, strtolower(Str::plural($name))],
            $this->getStub('Model')
        );
        file_put_contents(app_path("/Models/{$name}.php"), $params);

        return "app/Models/{$name}.php";
    }

    public function migration($name): string
    {
        $modelNamePluralLowerCase = strtolower(Str::plural($name));
        $params = str_replace(
            [
                '{{modelNamePluralLowerCase}}',
            ], [
                $modelNamePluralLowerCase,
            ], $this->getStub('Migration')
        );
        $path = '/migrations/'.date('Y_m_d_His_')."create_{$modelNamePluralLowerCase}_table.php";
        file_put_contents(database_path($path), $params);

        return 'database/'.$path;
    }

    public function indexRequest($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
            ], [
                $name,
            ], $this->getStub('Requests/Index')
        );
        $path = "/Http/Requests/{$name}/Index{$name}Request.php";
        file_put_contents(app_path($path), $params);

        return 'app'.$path;
    }

    public function storeRequest($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
            ], [
                $name,
            ], $this->getStub('Requests/Store')
        );
        $path = "/Http/Requests/{$name}/Store{$name}Request.php";
        file_put_contents(app_path($path), $params);

        return 'app'.$path;
    }

    public function updateRequest($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
            ], [
                $name,
            ], $this->getStub('Requests/Update')
        );
        $path = "/Http/Requests/{$name}/Update{$name}Request.php";
        file_put_contents(app_path($path), $params);

        return 'app'.$path;
    }

    public function pageIndex($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                strtolower($name),
                strtolower(Str::plural($name)),
            ], $this->getStub('Pages/Index')
        );
        $path = "/js/Pages/{$name}/Index.vue";
        file_put_contents(resource_path($path), $params);

        return 'resources'.$path;
    }

    public function pageCreate($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                strtolower($name),
                strtolower(Str::plural($name)),
            ], $this->getStub('Pages/Create')
        );
        $path = "/js/Pages/{$name}/Create.vue";
        file_put_contents(resource_path($path), $params);

        return 'resources'.$path;
    }

    public function pageTrash($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                strtolower($name),
                strtolower(Str::plural($name)),
            ], $this->getStub('Pages/Trash')
        );
        $path = "/js/Pages/{$name}/Trash.vue";
        file_put_contents(resource_path($path), $params);

        return 'resources'.$path;
    }

    public function pageEdit($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                strtolower($name),
                strtolower(Str::plural($name)),
            ], $this->getStub('Pages/Edit')
        );
        $path = "/js/Pages/{$name}/Edit.vue";
        file_put_contents(resource_path($path), $params);

        return 'resources'.$path;
    }

    public function route($name): string
    {
        $params = str_replace(
            [
                '{{modelName}}',
                '{{modelNameLowerCase}}',
                '{{modelNamePluralLowerCase}}',
            ],
            [
                $name,
                strtolower($name),
                strtolower(Str::plural($name)),
            ], $this->getStub('Route')
        );
        $path = '/routes/jarvis.php';
        file_put_contents(base_path($path), $params);

        return 'app'.$path;
    }

    protected function getStub($type)
    {
        return file_get_contents(resource_path("stubs/$type.stub"));
    }

    protected function makeDir($path)
    {
        return is_dir($path) || mkdir($path, 0777, true);
    }
}
