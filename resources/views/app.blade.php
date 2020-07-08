<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    <meta name="csrf" content="{{csrf_token()}}">

    <title>{{  env('APP_NAME') }}</title>
</head>
<body>
<noscript>Your browser does not support JavaScript!</noscript>
<div id="app">
<h1>Hello</h1>
</div>
<script src="{{mix('js/app.js')}}"></script>
</body>
</html>
