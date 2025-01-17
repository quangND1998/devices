<?php

namespace App\Http\Controllers;

use App\Models\AppWindow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Http\Controllers\Traits\FileUploadTrait;
use Illuminate\Support\Facades\File;

class AppWindowController extends Controller
{
    use FileUploadTrait;
    public function index()
    {
        $user = Auth::user();
        if ($user->hasPermissionTo('user-manager')) {
            $window_apps = AppWindow::with('user')->paginate(10);
        } else {
            $window_apps = AppWindow::with('user')->where('user_id', Auth::user()->id)->paginate(10);
        }

        return Inertia::render('Window/Index', compact('window_apps'));
    }


    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required',
            'path' => 'required',
            'version' => 'required',
            'packageName' => 'required',
            'icon' =>   'required|image|mimes:jpeg,png,jpg|max:2048',
            'thumb' =>   'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);


        $middlepath = '/window/';
        $path = public_path($middlepath);
        if (!File::exists($path)) {

            File::makeDirectory($path, 0777, true);
        }
        AppWindow::create([
            'name' => $request->name,
            'path' => $request->path,
            'version' => $request->version,
            'description' => $request->description,
            'packageName' => $request->packageName,
            'icon' => $this->image($request->file('icon'), $middlepath),
            'user_id' => Auth::user()->id,
            // 'thumb' => $this->image($request->file('thumb'), $middlepath),
        ]);
        return back()->with('success', 'create successfully');
    }


    public function update(Request $request, AppWindow $app)
    {
        $this->validate($request, [
            'name' => 'required',
            'path' => 'required',
            'version' => 'required',
            'packageName' => 'required',
            'icon' =>   'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);


        $middlepath = '/window/';
        $path = public_path($middlepath);
        if (!File::exists($path)) {

            File::makeDirectory($path, 0777, true);
        }

        $app->update([
            'name' => $request->name,
            'path' => $request->path,
            'version' => $request->version,
            'description' => $request->description,
            'packageName' => $request->packageName,
            'icon' => $request->file('icon') ? $this->update_image($request->file('icon'), time(), $middlepath, $app->icon) : $app->icon,
        ]);
        return back()->with('success', 'update successfully');
    }


    public function delete(AppWindow $app)
    {

        $extension = " ";
        $this->DeleteFolder($app->icon, $extension);
        $app->delete();
        return back()->with('success', 'update successfully');
    }
}
