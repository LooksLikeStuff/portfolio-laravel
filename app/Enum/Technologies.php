<?php

namespace App\Enum;

enum Technologies: string
{
//Laravel, React, MySql, Docker, Redis, Rabbitmq, Elasticsearch, CEO 100/100
//scss, javascript, jquery
    case LARAVEL = 'Laravel';
    case REACT = 'React';
    case MYSQL = 'MySQL';
    case POSTGRES = 'Postgres';
    case DOCKER = 'Docker';
    case BITRIX = 'Bitrix';
    case REDIS = 'Redis';
    case RABBITMQ = 'RabbitMQ';
    case ELASTICSEARCH = 'ElasticSearch';
    case SCSS = 'scss';
    case JAVASCRIPT = 'Javascript';
    case JQUERY = 'jQuery';
    case BLADE = 'Blade';
}
