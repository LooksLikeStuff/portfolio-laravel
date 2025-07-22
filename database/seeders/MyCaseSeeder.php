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
                'tasks' => [
                    'Реализован полностью адаптивный интерфейс на 4 языках (RU, EN, UA, KZ)',
                    'Интегрирована нейросеть для анализа объявлений: выявляет спам, сортирует фото по категориям (кухня, спальня и т.д.)',
                    'Реализован поиск по регионам, странам, городам, районам и множеству фильтров',
                    'Добавлена мультивалютность с автоматической конвертацией цен',
                    'Внедрена система оценки качества жилья (цена, расположение, удобства)',
                    'Сделана карта объектов с маршрутами до ближайших точек (магазины, кафе, спортзалы)',
                    'Оптимизирована скорость загрузки страниц (открытие за 0.5 сек)',
                    'Реализована регистрация через Google, Telegram и LINE',
                    'Подключена отказоустойчивая система с параллельной обработкой данных',
                    'Проведена комплексная SEO-оптимизация (оценка Lighthouse — 100/100)'
                ],
                'result' => 'сайт обрабатывает десятки тысяч объявлений, работает быстро, удобно, стабильно и эффективно индексируется в поиске.'
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
                'tasks' => [
                    'Сайт создан с нуля с чистой адаптивной версткой и анимацией',
                    'Настроено кеширование для высокой скорости загрузки',
                    'Реализована форма связи'
                ],
                'result' => 'компактно и качественно представить навыки разработчика. Реализовано без лишнего, с упором на визуальное восприятие и производительность.'
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
                'tasks' => [
                    'Сверстана адаптивная версия сайта по дизайнерскому макету — корректно работает на всех устройствах',
                    'Настроена система бронирования туров с удобной подачей заявок',
                    'Реализована email-рассылка для клиентов (новости, акции, подтверждения заявок)',
                    'Создан удобный интерфейс для редактирования туров и контента'
                ],
                'result' => 'сайт начал стабильно приносить заявки и стал рабочим инструментом продаж.'
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
                'tasks' => [
                    'Разработан современный адаптивный интерфейс',
                    'Сделана простая и удобная форма заявки',
                    'Реализован мини-опрос (5 вопросов) для уточнения деталей перед обращением'
                ],
                'result' => 'каждый пользователь с лёгкостью может пройти воронку заявки и отправить свои данные без лишних шагов.'
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
                'tasks' => [
                    'Создан список книг с возможностью добавления вручную или парсинга с litres.ru',
                    'Реализована фильтрация по названию, автору, году',
                    'Настроены цели чтения по неделям, месяцам и году',
                    'Визуализация прогресса в виде графиков и диаграмм',
                    'Экспорт и импорт данных в Excel и Word',
                    'Добавлен личный кабинет и авторизация через Google',
                    'Возможность просматривать и анализировать статистику друзей',
                    'Предусмотрен вход по приватной ссылке (например, от преподавателя или родителя)'
                ],
                'result' => 'сайт помогает читателям отслеживать свои успехи, формировать привычку читать и делиться прогрессом с другими.'
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
                'tasks' => [
                    'Реализована система безопасного хранения и шифрования паролей',
                    'Сделано разделение доступа по проектам и командам',
                    'Удобный поиск по логинам и названиям',
                    'Простая структура: команда → проект → учетные записи'
                ],
                'result' => 'надёжный и удобный инструмент для хранения доступов, который экономит десятки часов при работе в команде.'
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
                'tasks' => [
                    'Интеграция с Lichess для получения задач и статистики',
                    'Система уровней, внутренняя валюта, магазин, ачивки',
                    'Более 3 млн шахматных задач, которые можно решать по уровням',
                    'Разработан тренажёр шахматной доски и координат',
                    'Возможность участия в челленджах и турнирах',
                    'Подключены Stripe и Тинькофф для платной подписки',
                    'Панель управления с возможностью выкладывать объявления и отвечать пользователям'
                ],
                'result' => 'полноценная обучающая экосистема для шахматистов любого уровня, доступная с любого устройства.'
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
                'tasks' => [
                    'Разработан почтовый сервер с проверкой SPF, DKIM, DMARC',
                    'Интегрирован спам-фильтр и анализатор сообщений',
                    'Создан простой интерфейс для анализа писем',
                    'Автоматически выдаются рекомендации для улучшения доставляемости писем',
                    'Добавлено API для автоматической проверки в сторонних системах'
                ],
                'result' => 'сервис помогает бизнесу улучшать доставляемость писем и избегать спам-фильтров.'
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
                'tasks' => [
                    'Учёт времени, зарплаты и занятости каждого сотрудника',
                    'Управление проектами, заказами, клиентами',
                    'Хранение и организация всей документации',
                    'Автоматические расчёты прибыли по проектам и загрузки команды'
                ],
                'result' => 'система стала ключевым инструментом для управления работой команды и контроля бизнес-процессов.'
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
                'tasks' => [
                    'Разработка адаптивного магазина с фильтрацией по товарам',
                    'Интеграция модуля доставки CDEK',
                    'Реализована система управления статьями и новостями'
                ],
                'result' => 'интернет-магазин стал полностью рабочим решением с быстрой доставкой и простым каталогом.'
            ],
        ];

        foreach ($cases as $case) {
            MyCase::updateOrCreate(['name' => $case['name']], $case);
        }
    }
}
