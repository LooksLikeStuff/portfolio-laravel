<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResumeController extends Controller
{
    public function download()
    {
        return \Storage::download('public/resume.pdf', 'resume.pdf');
    }
}
