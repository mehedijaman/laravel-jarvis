<?php

namespace App\Http\Controllers;

use App\Http\Requests\Permission\PermissionIndexRequest;
use App\Http\Requests\Permission\PermissionStoreRequest;
use App\Http\Requests\Permission\PermissionUpdateRequest;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PermissionController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:create permission', ['only' => ['create', 'store']]);
        $this->middleware('permission:read permission', ['only' => ['index', 'show']]);
        $this->middleware('permission:update permission', ['only' => ['edit', 'update']]);
        $this->middleware('permission:delete permission', ['only' => ['destroy', 'destroyBulk']]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index(PermissionIndexRequest $request)
    {
        $permissions = Permission::query();
        if ($request->has('search')) {
            $permissions->where('name', 'LIKE', "%" . $request->search . "%");
            $permissions->orWhere('guard_name', 'LIKE', "%" . $request->search . "%");
        }
        if ($request->has(['field', 'order'])) {
            $permissions->orderBy($request->field, $request->order);
        }
        $perPage = $request->has('perPage') ? $request->perPage : 10;
        return Inertia::render('Permission/Index', [
            'title'         => "Permission",
            'filters'       => $request->all(['search', 'field', 'order']),
            'perPage'       => (int) $perPage,
            'permissions'   => $permissions->paginate($perPage)->onEachSide(0),
            'breadcrumbs'   => [['label' => "Permission", 'href' => route('permission.index')]],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermissionStoreRequest $request)
    {
        DB::beginTransaction();
        try {
            $permission = Permission::create([
                'name'          => $request->name,
                'guard_name'    => $request->guard_name,
            ]);
            $superadmin = Role::whereName('superadmin')->first();
            $superadmin->givePermissionTo([$request->name]);
            DB::commit();
            return back()->with('success', $permission->name . " created succesfully");
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', "Permission create failed : ") . $th->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PermissionUpdateRequest $request, Permission $permission)
    {
        DB::beginTransaction();
        try {
            $superadmin = Role::whereName('superadmin')->first();
            $superadmin->revokePermissionTo([$permission->name]);
            $permission->update([
                'name'          => $request->name,
                'guard_name'    => $request->guard_name,
            ]);
            $superadmin->givePermissionTo([$permission->name]);
            DB::commit();
            return back()->with('success', $permission->name . " updated succesfully");
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', $permission->name . " update failed : ") . $th->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        DB::beginTransaction();
        try {
            $superadmin = Role::whereName('superadmin')->first();
            $superadmin->revokePermissionTo([$permission->name]);
            $permission->delete();
            DB::commit();
            return back()->with('success', $permission->name . " deleted succesfully");
        } catch (\Throwable $th) {
            DB::rollback();
            return back()->with('error', $permission->name . " delete failed : ") . $th->getMessage();
        }
    }

    public function destroyBulk(Request $request)
    {
        try {
            $permission = Permission::whereIn('id', $request->id);
            $permission->delete();
            return back()->with('success', count($request->id) . " Permission deleted successfully");
        } catch (\Throwable $th) {
            return back()->with('error', count($request->id) . " Permission delete failed : ") . $th->getMessage();
        }
    }
}
