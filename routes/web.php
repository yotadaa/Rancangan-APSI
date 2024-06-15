<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;


Route::get('/', [PageController::class, 'index'])->name('index');
Route::get("/login", [PageController::class, "LoginPage"])->name("login-page");
Route::get("/register", [PageController::class, "RegisterPage"])->name("register-page");
Route::get("/reservasi/{kode}", [PageController::class, "ReservasiPage"])->name("reservasi-page");
Route::get("/home", [PageController::class, "HomePage"])->name("home-page");
