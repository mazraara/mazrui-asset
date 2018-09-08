<?php

use Illuminate\Database\Seeder;
use App\Product as Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create product 1
        Product::create([
            'label' => 'Laptop',
            'description' => str_random(12),
            'type' => Product::TYPE_LAPTOP,
            'status' => Product::STATUS_AVAILABLE,
        ]);

        //create product 2
        Product::create([
            'label' => 'Desktop',
            'description' => str_random(12),
            'type' => Product::TYPE_DESKTOP,
            'status' => Product::STATUS_AVAILABLE,
        ]);

        //create product 3
        Product::create([
            'label' => 'Mobile',
            'description' => str_random(12),
            'type' => Product::TYPE_MOBILE,
            'status' => Product::STATUS_AVAILABLE,
        ]);
    }
}
