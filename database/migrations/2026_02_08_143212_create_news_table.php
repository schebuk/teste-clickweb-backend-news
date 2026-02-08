<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->unique();
            $table->text('summary');
            $table->longText('content');
            $table->string('image_url', 500)->nullable();
            $table->string('author', 100)->default('Redação');
            $table->string('category', 50)->default('Geral');
            $table->date('published_at');
            $table->integer('views')->default(0);
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
            
            // Indexes para melhor performance
            $table->index('category');
            $table->index('published_at');
            $table->index('is_featured');
            $table->index(['category', 'published_at']);
            $table->index(['is_featured', 'published_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};