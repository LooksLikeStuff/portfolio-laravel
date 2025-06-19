<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolioData = [
            'hero' => [
                'name' => 'Данила Скворцов',
                'title' => 'Fullstack-разработчик',
                'description' => 'Fullstack-разработчик с опытом 2+ года. Работаю автономно: могу взять задачу и довести до результата без контроля и микроменеджмента.',
            ],
            'about' => [
                'description' => 'Fullstack-разработчик с опытом 2+ года. Работаю автономно: могу взять задачу и довести до результата без контроля и микроменеджмента.',
                'location' => 'Санкт-Петербург',
                'age' => '23',
                'email' => 'thetroop3r1337@gmail.com',
                'phone' => '+7 (915) 850-69-35',
            ],
            'skills' => [
                'Backend' => [
                    ['name' => 'PHP', 'level' => 90],
                    ['name' => 'Laravel', 'level' => 95],
                    ['name' => 'MySQL', 'level' => 85],
                    ['name' => 'Redis', 'level' => 80],
                    ['name' => 'RabbitMQ', 'level' => 75],
                    ['name' => 'Elasticsearch', 'level' => 80],
                    ['name' => 'REST API', 'level' => 90],
                ],
                'Frontend' => [
                    ['name' => 'JavaScript', 'level' => 85],
                    ['name' => 'React', 'level' => 80],
                    ['name' => 'Vue.js', 'level' => 75],
                    ['name' => 'HTML/CSS', 'level' => 90],
                    ['name' => 'Bootstrap', 'level' => 85],
                    ['name' => 'SCSS', 'level' => 80],
                ],
                'Mobile' => [
                    ['name' => 'React Native', 'level' => 70],
                    ['name' => 'Flutter', 'level' => 65],
                ],
                'Tools' => [
                    ['name' => 'Git', 'level' => 90],
                    ['name' => 'Docker', 'level' => 80],
                    ['name' => 'Linux', 'level' => 85],
                    ['name' => 'Nginx', 'level' => 75],
                    ['name' => 'CI/CD', 'level' => 70],
                ],
            ],
            'experience' => [
                [
                    'company' => 'Freelance',
                    'position' => 'Fullstack Developer',
                    'period' => '2022 - настоящее время',
                    'location' => 'Удаленно',
                    'description' => 'Разработка веб-приложений и API для различных клиентов',
                    'achievements' => [
                        'Создал более 15 веб-приложений на Laravel',
                        'Разработал RESTful API для мобильных приложений',
                        'Оптимизировал производительность баз данных',
                        'Внедрил CI/CD процессы для автоматизации деплоя',
                    ],
                ],
                [
                    'company' => 'Стажировка',
                    'position' => 'Junior Developer',
                    'period' => '2021 - 2022',
                    'location' => 'Санкт-Петербург',
                    'description' => 'Изучение современных веб-технологий и практик разработки',
                    'achievements' => [
                        'Освоил Laravel и современный PHP',
                        'Изучил React и современный JavaScript',
                        'Получил опыт работы с базами данных',
                        'Научился работать в команде с Git',
                    ],
                ],
            ],
            'projects' => [
                [
                    'title' => 'E-commerce платформа',
                    'description' => 'Полнофункциональный интернет-магазин с админ-панелью',
                    'technologies' => ['Laravel', 'React', 'MySQL', 'Redis'],
                    'category' => 'web',
                    'year' => '2024',
                    'image' => '/images/project1.jpg',
                    'github' => 'https://github.com/example/ecommerce',
                    'demo' => 'https://demo.example.com',
                ],
                [
                    'title' => 'API для мобильного приложения',
                    'description' => 'RESTful API с аутентификацией и real-time уведомлениями',
                    'technologies' => ['Laravel', 'MySQL', 'Redis', 'WebSockets'],
                    'category' => 'api',
                    'year' => '2023',
                    'image' => '/images/project2.jpg',
                    'github' => 'https://github.com/example/mobile-api',
                ],
                [
                    'title' => 'Система управления контентом',
                    'description' => 'CMS с возможностью создания и редактирования контента',
                    'technologies' => ['Laravel', 'Vue.js', 'MySQL'],
                    'category' => 'web',
                    'year' => '2023',
                    'image' => '/images/project3.jpg',
                    'github' => 'https://github.com/example/cms',
                    'demo' => 'https://cms.example.com',
                ],
            ],
            'contact' => [
                'email' => 'thetroop3r1337@gmail.com',
                'phone' => '+7 (915) 850-69-35',
                'location' => 'Санкт-Петербург, Россия',
                'social' => [
                    'github' => 'https://github.com/LooksLikeStuff',
                    'telegram' => 'https://t.me/username',
                ],
            ],
        ];

        return Inertia::render('Portfolio', [
            'portfolioData' => $portfolioData,
        ]);
    }
}

