<?php

namespace App\Console\Commands;

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
     */
    public function handle(): int
    {
        $name = ucfirst($this->argument('name'));
        $this->makeDir(app_path("/HTTP/Requests/{$name}"));
        File::append(base_path('routes/web.php'),
            "
    Route::resource('".strtolower($name)."', ".$name."Controller::class)->except('create', 'show', 'edit');
    Route::post('".strtolower($name)."/destroy-bulk', [".$name."Controller::class, 'destroyBulk'])->name('".strtolower($name).".destroy-bulk');"
        );

        render(view('cli.jarvis', [
            'controller' => $this->controller($name),
            'model' => $this->model($name),
            'migration' => $this->migration($name),
            'indexRequest' => $this->indexRequest($name),
            'storeRequest' => $this->storeRequest($name),
            'updateRequest' => $this->updateRequest($name),
        ]));
        return self::SUCCESS;
    }

    protected function controller($name): string
    {
        $controllerTemplate = str_replace([
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
        file_put_contents(app_path("/Http/Controllers/{$name}Controller.php"), $controllerTemplate);
        return "app/Http/Controllers/{$name}Controller.php";
    }

    protected function model($name): string
    {
        $modelTemplate = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}'],
            [$name, strtolower(Str::plural($name))],
            $this->getStub('Model')
        );
        file_put_contents(app_path("/Models/{$name}.php"), $modelTemplate);
        return "app/Models/{$name}.php";
    }

    public function migration($name): string
    {
        $modelNamePluralLowerCase = strtolower(Str::plural($name));
        $migrationTemplate = str_replace([
                '{{modelNamePluralLowerCase}}',
            ],[
                $modelNamePluralLowerCase,
            ], $this->getStub('Migration')
        );
        $path = "/migrations/".date('Y_m_d_His_')."create_{$modelNamePluralLowerCase}_table.php";
        file_put_contents(database_path($path), $migrationTemplate);
        return "database/".$path;
    }

    public function indexRequest($name): string
    {
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Index')
        );
        $path = "/HTTP/Requests/{$name}/{$name}IndexRequest.php";
        file_put_contents(app_path($path), $migrationTemplate);
        return "app".$path;
    }

    public function storeRequest($name): string
    {
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Store')
        );
        $path = "/HTTP/Requests/{$name}/{$name}StoreRequest.php";
        file_put_contents(app_path($path), $migrationTemplate);
        return "app".$path;
    }

    public function updateRequest($name): string
    {
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Update')
        );
        $path = "/HTTP/Requests/{$name}/{$name}UpdateRequest.php";
        file_put_contents(app_path($path), $migrationTemplate);
        return "app".$path;
    }

    protected function getStub($type){
        return file_get_contents(resource_path("stubs/$type.stub"));
    }

    protected function makeDir($path)
    {
        return is_dir($path) || mkdir($path);
    }
}
