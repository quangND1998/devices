<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductPackage extends Model
{
    use HasFactory;

    protected $table = 'product_packages';
    protected $fillable = ['id',    'name', 'id_priority', 'price','save_money', 'package_time','free_trail_time', 'state',   'created_at',  'updated_at'];


}
