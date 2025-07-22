<?php

namespace App\Models;

use App\Enum\CaseTypes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyCase extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'url',
        'type',
        'description',
        'technologies',
        'tasks',
        'result',
        'icon',
    ];

    protected $casts = [
        'type' => CaseTypes::class,
        'technologies' => 'array',
        'tasks' => 'array',
    ];
}
