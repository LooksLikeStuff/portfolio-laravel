# 🚀 Laravel + Inertia.js + React 18 Portfolio

Монолитное портфолио приложение, созданное с использованием Laravel 11, Inertia.js и React 18.

## ✨ Особенности

- 🏗 **Монолитная архитектура** - единое приложение Laravel с React фронтендом
- ⚡ **Laravel 11** - современный PHP фреймворк с последними возможностями
- 🔄 **Inertia.js** - современный подход к созданию SPA без API
- ⚛️ **React 18** - последняя версия React с новыми возможностями
- 🎨 **Bootstrap 5** - адаптивная CSS библиотека
- 🎭 **Framer Motion** - плавные анимации и переходы
- 🎯 **SCSS** - модульная архитектура стилей
- 📱 **Адаптивный дизайн** - корректная работа на всех устройствах

## 🛠 Технологический стек

### Backend
- **Laravel 11** - PHP фреймворк
- **Inertia.js** - связующее звено между Laravel и React
- **PHP 8.2+** - современная версия PHP

### Frontend
- **React 18** - библиотека для создания пользовательских интерфейсов
- **Inertia React Adapter** - React адаптер для Inertia.js
- **Bootstrap 5** - CSS фреймворк
- **SCSS** - препроцессор CSS
- **Framer Motion** - библиотека анимаций
- **Lucide React** - современные иконки

### Сборка
- **Vite** - быстрый сборщик и dev-сервер
- **Laravel Vite Plugin** - интеграция Vite с Laravel

## 📁 Структура проекта

```
portfolio-laravel-app/
├── app/
│   └── Http/
│       └── Controllers/
│           └── PortfolioController.php    # Контроллер портфолио
├── resources/
│   ├── js/
│   │   ├── Components/                    # React компоненты
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── Pages/
│   │   │   └── Portfolio.jsx             # Главная страница
│   │   └── app.jsx                       # Точка входа
│   ├── scss/                             # SCSS стили
│   │   ├── _variables.scss               # Переменные
│   │   ├── main.scss                     # Главный файл стилей
│   │   └── components/                   # Стили компонентов
│   └── views/
│       └── app.blade.php                 # Главный Blade шаблон
├── routes/
│   └── web.php                           # Веб маршруты
├── public/
│   └── developer-icon.jpg                # Иконка разработчика
├── package.json
├── vite.config.js
└── composer.json
```

## 🚀 Установка и запуск

### Предварительные требования
- PHP 8.2+
- Composer
- Node.js 18+
- npm или yarn

### 1. Клонирование репозитория
```bash
git clone https://github.com/LooksLikeStuff/portfolio-laravel-app.git
cd portfolio-laravel-app
```

### 2. Установка зависимостей
```bash
# PHP зависимости
composer install

# JavaScript зависимости
npm install
```

### 3. Настройка окружения
```bash
# Копирование файла окружения
cp .env.example .env

# Генерация ключа приложения
php artisan key:generate
```

### 4. Сборка assets
```bash
# Для разработки
npm run dev

# Для продакшена
npm run build
```

### 5. Запуск сервера
```bash
php artisan serve
```

Приложение будет доступно по адресу `http://localhost:8000`

## 🎨 Кастомизация

### Изменение данных портфолио
Отредактируйте файл `app/Http/Controllers/PortfolioController.php`:

```php
$portfolioData = [
    'hero' => [
        'name' => 'Ваше имя',
        'title' => 'Ваша должность',
        'description' => 'Ваше описание',
    ],
    // ... остальные данные
];
```

### Изменение стилей
Отредактируйте файлы в папке `resources/scss/`:
- `_variables.scss` - переменные цветов и размеров
- `components/` - стили отдельных компонентов

### Добавление новых страниц
1. Создайте новый React компонент в `resources/js/Pages/`
2. Добавьте маршрут в `routes/web.php`
3. Создайте соответствующий метод в контроллере

## 🔧 Архитектура Inertia.js

Inertia.js позволяет создавать современные SPA приложения, используя серверный роутинг и контроллеры Laravel, но с React компонентами на фронтенде.

### Преимущества:
- **Нет необходимости в API** - данные передаются напрямую из контроллеров
- **SEO-дружественность** - серверный рендеринг
- **Простота разработки** - привычная Laravel архитектура
- **Современный UX** - SPA поведение без перезагрузки страниц

## 📊 Секции портфолио

- **Hero** - Главная секция с именем и описанием
- **О себе** - Личная информация и контакты  
- **Навыки** - Интерактивная визуализация технических навыков
- **Опыт** - История работы и достижения
- **Проекты** - Портфолио выполненных проектов
- **Контакты** - Контактная информация

## 🚀 Деплой

### Подготовка к продакшену
```bash
# Сборка assets
npm run build

# Оптимизация автозагрузки
composer install --optimize-autoloader --no-dev

# Кеширование конфигурации
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Настройка веб-сервера
Убедитесь, что веб-сервер направляет все запросы на `public/index.php`

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл `LICENSE` для подробностей.

## 👨‍💻 Автор

**Данила Скворцов** - Fullstack разработчик

- 📧 Email: thetroop3r1337@gmail.com
- 📱 Телефон: +7 (915) 850-69-35
- 📍 Локация: Санкт-Петербург, Россия

---

⭐ Если вам понравился этот проект, поставьте звездочку на GitHub!

