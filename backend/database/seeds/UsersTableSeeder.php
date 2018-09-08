<?php

use App\User as User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email'    => 'azraar@gmail.com',
            'password' => Hash::make('123456'),
            'name'     => 'admin',
        ]);
    }
}
