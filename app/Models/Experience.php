<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name',
        'job_title',
        'description',
        'tasks',
        'location',
        'technologies',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'technologies' => 'array',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function getStartDateAttribute($value): ?string
    {
        return $value ? Carbon::parse($value)->translatedFormat('d F Y') : null;
    }

    public function getEndDateAttribute($value): ?string
    {
        return $value ? Carbon::parse($value)->translatedFormat('d F Y') : null;
    }
}
