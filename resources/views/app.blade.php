<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Siramu | Sistem Reservasi Menu</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet" /> --}}

    @inertiaHead
</head>

<body>
    @inertia
    @routes
</body>

</html>
