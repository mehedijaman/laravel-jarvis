<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

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
    public function handle()
    {
        $name = ucfirst($this->argument('name'));
        $this->controller($name);
        $this->model($name);
        $this->migration($name);

        $this->makeDir(app_path("/HTTP/Requests/{$name}"));
        $this->indexRequest($name);
        $this->storeRequest($name);
        $this->updateRequest($name);
        File::append(base_path('routes/web.php'),
            "
    Route::resource('".strtolower($name)."', ".$name."Controller::class)->except('create', 'show', 'edit');
    Route::post('".strtolower($name)."/destroy-bulk', [".$name."Controller::class, 'destroyBulk'])->name('".strtolower($name).".destroy-bulk');"
        );
    }

    protected function controller($name){
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
        }

    protected function model($name){
        $modelTemplate = str_replace(
            ['{{modelName}}', '{{modelNamePlural}}'],
            [$name, strtolower(Str::plural($name))],
            $this->getStub('Model')
        );
        file_put_contents(app_path("/Models/{$name}.php"), $modelTemplate);
    }

    public function migration($name){
        $modelNamePluralLowerCase = strtolower(Str::plural($name));
        $migrationTemplate = str_replace([
                '{{modelNamePluralLowerCase}}',
            ],[
                $modelNamePluralLowerCase,
            ], $this->getStub('Migration')
        );
        file_put_contents(database_path("/migrations/".date('Y_m_d_His_')."create_{$modelNamePluralLowerCase}_table.php"), $migrationTemplate);
    }

    public function indexRequest($name){
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Index')
        );
        file_put_contents(app_path("/HTTP/Requests/{$name}/{$name}IndexRequest.php"), $migrationTemplate);
    }

    public function storeRequest($name){
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Store')
        );
        file_put_contents(app_path("/HTTP/Requests/{$name}/{$name}StoreRequest.php"), $migrationTemplate);
    }

    public function updateRequest($name){
        $migrationTemplate = str_replace([
                '{{modelName}}',
            ],[
                $name,
            ], $this->getStub('Requests/Update')
        );
        file_put_contents(app_path("/HTTP/Requests/{$name}/{$name}UpdateRequest.php"), $migrationTemplate);
    }

    protected function getStub($type){
        return file_get_contents(resource_path("stubs/$type.stub"));
    }

    protected function makeDir($path)
    {
        return is_dir($path) || mkdir($path);
    }
}
