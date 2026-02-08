<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\News;

class NewsFactory extends Factory
{
    protected $model = News::class;

    public function definition(): array
    {
        $categories = ['Tecnologia', 'Saúde', 'Negócios', 'Ciência', 'Educação', 'Esportes', 'Entretenimento'];
        $authors = ['Maria Silva', 'Carlos Santos', 'Ana Costa', 'Pedro Almeida', 'Juliana Lima'];
        
        $title = $this->faker->sentence(6);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'summary' => $this->faker->paragraph(2),
            'content' => $this->faker->paragraphs(5, true),
            'image_url' => $this->faker->imageUrl(800, 400, 'business', true),
            'author' => $this->faker->randomElement($authors),
            'category' => $this->faker->randomElement($categories),
            'published_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
            'views' => $this->faker->numberBetween(100, 5000),
            'is_featured' => $this->faker->boolean(30), // 30% chance de ser destaque
        ];
    }
}