<?php

namespace Database\Seeders;

use App\Enum\Technologies;
use App\Models\Experience;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $experience = [
            [
                'company_name' => 'PsyhoSoft',
                'job_title' => 'Middle Fullstack Developer',
                'description' => 'Keyway — агрегатор аренды жилья, платформа по типу Aviasales, но для квартир. Разрабатываем систему с нуля: агрегируем, обрабатываем и отображаем объявления с крупнейших площадок.',
                'location' => 'Астана, Казахстан',
                'tasks' => <<<TEXT
- Разработка фронтенда и бэкенда на Laravel + React
- Настройка Elasticsearch для расширенного поиска
- Деплой через Docker, настройка Nginx
- SEO-оптимизация, генерация мета-тегов
- Архитектурное проектирование, логика обработки данных и кэширование
- Постановка задач и взаимодействие с другими разработчиками
TEXT,
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::REACT,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                    Technologies::REDIS,
                    Technologies::RABBITMQ,
                    Technologies::ELASTICSEARCH,
                    Technologies::SCSS,
                    Technologies::BLADE,
                ],
                'start_date' => Carbon::parse('2024-07-01'),
                'end_date' => null,
            ],
            [
                'company_name' => 'Quicktum',
                'job_title' => 'Junior Fullstack Developer',
                'location' => 'Москва, Россия',
                'description' => 'Веб-студия из Москвы, специализирующаяся на разработке сложных веб-приложений под заказ.',
                'tasks' => <<<TEXT
- Разработка онлайн-школы шахмат: оптимизация больших объёмов данных, сложные SQL-запросы
- Создание внутренней CRM: множественные CRUD-модули, валидация, интерфейс
- Поддержка приложения для турфирмы на 1C-Битрикс: работа с инфоблоками, модулями
- Разработка сервиса для проверки email: настройка почтового сервера на Ubuntu, backend/frontend
- Интеграция сторонних API, парсинг данных, оптимизация кода и SQL-запросов
TEXT,
                'technologies' => [
                    Technologies::BITRIX,
                    Technologies::JQUERY,
                    Technologies::LARAVEL,
                    Technologies::REACT,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                    Technologies::REDIS,
                    Technologies::RABBITMQ,
                    Technologies::ELASTICSEARCH,
                    Technologies::SCSS,
                    Technologies::BLADE,
                ],
                'start_date' => Carbon::parse('2022-07-01'),
                'end_date' => Carbon::parse('2024-07-01'),
            ]
        ];


        foreach ($experience as $exp) {
            Experience::updateOrCreate([
               'company_name' => $exp['company_name'],
            ], $exp);
        }

    }
}
