<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    //
    public function index() {
        return Inertia::render('App', ["menu" => "root-page"]);
    }
    public function LoginPage() {
        return Inertia::render("App", ["menu" => "login-page"]);
    }
    public function RegisterPage() {
        return Inertia::render("App", ["menu" => "register-page"]);
    }

    public function ReservasiPage($kode) {
        return Inertia::render("App", ["menu" => "reservasi-page", "kode" => $kode]);
    }

    public function HomePage() {
        return Inertia::render("App", ["menu" => "home-page"]);
    }

}
