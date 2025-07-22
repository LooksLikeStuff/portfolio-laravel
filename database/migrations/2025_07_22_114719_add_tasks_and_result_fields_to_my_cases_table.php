<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('my_cases', function (Blueprint $table) {
            $table->json('tasks')
                ->after('technologies');

            $table->string('result')
                ->after('tasks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('my_cases', function (Blueprint $table) {
            $table->dropColumn(['tasks', 'result']);
        });
    }
};
