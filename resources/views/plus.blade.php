<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/3569/3569998.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <title>TonerSite</title>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script type="module" src="{{ asset('js/app.js') }}"></script>


</head>

<body class="antialiased">
    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        @if (Route::has('login'))
        <div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">
            @auth
            <a href="{{ url('/home') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Home</a>
            @else
            <a href="{{ route('login') }}" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>

            @if (Route::has('register'))
            <a href="{{ route('register') }}" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a>
            @endif
            @endauth
        </div>
        @endif


    </div>
    <nav class="navbar navbar-expand-sm bg-info navbar-dark text-center justify-content-center">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="/"><img src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg" height="30"></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="minus">Elvesz</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="plus">Hozzáad</a>
                </li>

            </ul>
        </div>
    </nav>



    <div class="container-sm">
    <form action="/action_page.php">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Melyik nyomtatóhoz?:</label>
                    <input type="email" class="form-control" id="email" placeholder="" name="email">
                </div>
                <div class="mb-3">
                    <label for="pwd" class="form-label">Milyen szín?</label>
                    <input type="password" class="form-control" id="pwd" placeholder="" name="pswd">
                    <input type="hidden" class="form-control" id="pwd" placeholder="" name="pswd">
                </div>

                <div class="mb-3">
                    <label for="howmany" class="form-label">Mennyit?</label>
                    <input type="number" class="form-control" id="pwd" placeholder="" name="pswd">
                </div>

                <button type="submit" class="btn btn-primary">Ment</button>
            </form>
    </div>
    <footer class="bg-dark text-center text-white">

    </footer>
</body>

</html>