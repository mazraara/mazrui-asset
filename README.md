# mazrui-asset

A demo project for a IT company to manage its assets.

Technologies used: Laravel 5.7 & Angular 5.2

1. Git clone from https://gitlab.com/mazraara/mazrui-asset.git

2. Go to frontend directory and run “npm install”

3. Go to backend directory and run “composer install”

4. Copy .env.example to .env and update the database params. I used SQLite, it works with
MySQL as well

5. To preload the database and config the API run the below commands
“php artisan key:generate”
“php artisan migrate —seed"
“php artisan passport:install”

6. After you run “passprt:install” command you get 2 keys
take the second key and set it in frontend/enviroments/environment.ts and frontend/
enviroments/environment.prod.ts and set backend url as: http://localhost:8000

7. To launch the App run the below command

Inside Frontend directory -> ng serve
Frontend app will launch at http://localhost:4200/

Inside Backend directory -> php artisan serve
Backend app will launch at http://localhost:8000/
