<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Models\MyCase;

use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolioData = [
            'hero' => [
                'name' => 'Данила Скворцов',
                'title' => 'Fullstack-разработчик',
                'description' => 'Fullstack-разработчик с опытом 3+ года. Работаю автономно: могу взять задачу и довести до результата без контроля и микроменеджмента.',
            ],
            'about' => [
                'description' => 'Fullstack-разработчик с опытом 3+ года. Работаю автономно: могу взять задачу и довести до результата без контроля и микроменеджмента.',
                'location' => 'Пхукет',
                'age' => '23',
                'email' => 'thetroop3r1337@gmail.com',
                'phone' => '+7 (915) 850-69-35',
            ],
            'skills' => [
                'backend' => [
                    ['name' => 'PHP', 'level' => 90],
                    ['name' => 'Laravel', 'level' => 95],
                    ['name' => 'MySQL', 'level' => 85],
                    ['name' => 'Postgres', 'level' => 85],
                    ['name' => 'Redis', 'level' => 80],
                    ['name' => 'RabbitMQ', 'level' => 75],
                    ['name' => 'Elasticsearch', 'level' => 80],
                    ['name' => 'REST API', 'level' => 90],
                ],
                'frontend' => [
                    ['name' => 'JavaScript', 'level' => 85],
                    ['name' => 'React', 'level' => 80],
                    ['name' => 'HTML/CSS', 'level' => 90],
                    ['name' => 'Bootstrap', 'level' => 85],
                    ['name' => 'Tailwind', 'level' => 85],
                    ['name' => 'SCSS', 'level' => 80],
                ],
                'tools' => [
                    ['name' => 'Git', 'level' => 90],
                    ['name' => 'Docker', 'level' => 80],
                    ['name' => 'Linux', 'level' => 85],
                    ['name' => 'Nginx', 'level' => 75],
                    ['name' => 'CI/CD', 'level' => 70],
                ],
            ],
            'experience' => Experience::orderByDesc('start_date')->get()->toArray(),
            'projects' => MyCase::all()->toArray(),
            'contact' => [
                'email' => 'thetroop3r1337@gmail.com',
                'phone' => '+7 (915) 850-69-35',
                'location' => 'Пхукет, Таиланд',
                'social' => [
                    'github' => 'https://github.com/LooksLikeStuff',
                    'telegram' => 'https://t.me/whois_stuff',
                ],
            ],
        ];

        return Inertia::render('Portfolio', [
            'portfolioData' => $portfolioData,
        ]);
    }
}

