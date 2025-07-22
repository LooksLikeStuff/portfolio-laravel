<?php

namespace Database\Seeders;

use App\Enum\CaseTypes;
use App\Enum\Technologies;
use App\Models\MyCase;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MyCaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cases = [
            [
                'name' => 'KeyWay',
                'url' => 'https://keyway.org',
                'description' => 'Платформа меняющая мир. Все объявления со всего мира в одном месте. Арендуйте квартиру, дом или виллу без стресса уже сейчас.',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::REACT,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                    Technologies::REDIS,
                    Technologies::RABBITMQ,
                    Technologies::ELASTICSEARCH,
                ],
                'type' => CaseTypes::WEB_APPLICATIONS,
                'icon' => 'keyway.svg',
            ],
            [
                'name' => 'IAmStuff',
                'url' => 'https://iamstuff.space',
                'description' => 'Мой сайт портфолио',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::REACT,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                ],
                'type' => CaseTypes::PORTFOLIO,
                'icon' => 'iamstuff.svg',
            ],
            [
                'name' => 'MyFamilyTravel',
                'url' => 'https://myfamilytravel.ru',
                'description' => 'Семейные туры по России. Комфортный отдых и приключения для всей семьи',
                'technologies' => [
                    Technologies::BITRIX,
                    Technologies::SCSS,
                    Technologies::JAVASCRIPT,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::BUSINESS,
                'icon' => 'myfamilytravel.svg',
            ],
            [
                'name' => 'msn24',
                'url' => 'https://msn24.ru',
                'description' => 'Выкуп недвижимости и долей в квартирах в Москве за 24 часа',
                'technologies' => [
                    Technologies::SCSS,
                    Technologies::JAVASCRIPT,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::BUSINESS,
                'icon' => 'msn24.svg',
            ],
            [
                'name' => 'Prochitala',
                'url' => 'http://prochitala.ru',
                'description' => 'Читательский дневник. Чтобы не забыть, что было прочитано, и удобно посчитать статистику.',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::BLADE,
                    Technologies::DOCKER,
                    Technologies::MYSQL,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::EDUCATION,
                'icon' => 'prochitala.svg',
            ],
            [
                'name' => 'qq12345',
                'url' => 'https://qq12345.ru',
                'description' => 'Qqшечка. Менеджер паролей для IT',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::BLADE,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                    Technologies::RABBITMQ,
                    Technologies::REDIS,
                ],
                'type' => CaseTypes::SERVICES,
                'icon' => 'qq12345.svg',
            ],
            [
                'name' => 'Imatran Shakki chess',
                'url' => 'https://chess.auringontalo.fi',
                'description' => 'Шахматный клуб Imatran shakki. Обучение, призы за победы в турнирах и участие в челленджах!',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::BLADE,
                    Technologies::DOCKER,
                    Technologies::MYSQL,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::EDUCATION,
                'icon' => 'chess.svg',
            ],
            [
                'name' => 'CheckYourMail',
                'url' => 'https://checkyourmail.ru',
                'description' => 'Проверьте, не попадают ли ваши письма в СПАМ',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                ],
                'type' => CaseTypes::SERVICES,
                'icon' => 'checkyourmail.svg',
            ],
            [
                'name' => 'Quicktum CRM',
                'url' => 'https://crm.quicktum.ru',
                'description' => 'Внутренний CRM для веб-студии quicktum',
                'technologies' => [
                    Technologies::LARAVEL,
                    Technologies::MYSQL,
                    Technologies::DOCKER,
                    Technologies::REDIS,
                    Technologies::RABBITMQ,
                    Technologies::BLADE,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::BUSINESS,
                'icon' => 'quicktum.svg',
            ],
            [
                'name' => 'TriathlonShop',
                'url' => 'https://triathlonshop.ru',
                'description' => 'Все для занятий триатлоном на одном сайте. Велосипед, бег, плавание',
                'technologies' => [
                    Technologies::BITRIX,
                    Technologies::SCSS,
                    Technologies::JAVASCRIPT,
                    Technologies::JQUERY,
                ],
                'type' => CaseTypes::BUSINESS,
                'icon' => 'triathlonshop.svg',
            ],
        ];

        foreach ($cases as $case) {
            MyCase::updateOrCreate(['name' => $case['name']], $case);
        }
    }
}
