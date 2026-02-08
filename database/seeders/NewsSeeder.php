<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;
use Carbon\Carbon;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        // Limpar tabela antes de popular
        News::truncate();
        
        $newsData = [
            [
                'title' => 'Inteligência Artificial Transforma Mercado de Trabalho',
                'slug' => 'inteligencia-artificial-transforma-mercado-de-trabalho',
                'summary' => 'A IA está revolucionando a forma como trabalhamos, criando novas profissões e automatizando tarefas repetitivas.',
                'content' => '<p>A inteligência artificial está causando uma transformação profunda no mercado de trabalho global. Empresas estão adotando soluções de IA para otimizar processos, melhorar a produtividade e reduzir custos.</p>
                             <p>De acordo com um relatório recente, mais de 40% das empresas já utilizam alguma forma de IA em seus processos. As áreas mais impactadas incluem atendimento ao cliente, análise de dados e desenvolvimento de produtos.</p>
                             <p>Especialistas afirmam que, embora algumas profissões possam ser automatizadas, a IA criará novas oportunidades em áreas como ciência de dados, ética em IA e desenvolvimento de sistemas inteligentes.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Maria Silva',
                'category' => 'Tecnologia',
                'published_at' => Carbon::now()->subDays(2),
                'views' => 1542,
                'is_featured' => true,
            ],
            [
                'title' => 'Nova Vacina Contra Câncer Mostra Resultados Promissores',
                'slug' => 'nova-vacina-contra-cancer-mostra-resultados-promissores',
                'summary' => 'Pesquisadores anunciam avanços significativos no desenvolvimento de uma vacina contra vários tipos de câncer.',
                'content' => '<p>Cientistas de uma renomada universidade anunciaram resultados positivos nos testes clínicos de uma vacina experimental contra o câncer. A terapia, que usa tecnologia de mRNA, ensina o sistema imunológico a identificar e destruir células cancerígenas específicas.</p>
                             <p>Os primeiros resultados mostram uma redução significativa no tamanho dos tumores em pacientes com melanoma avançado. Os pesquisadores esperam expandir os testes para outros tipos de câncer no próximo ano.</p>
                             <p>"Este é um passo importante na luta contra o câncer", afirmou a Dra. Ana Costa, líder da pesquisa. "Estamos otimistas com os resultados iniciais."</p>',
                'image_url' => 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Dr. Ana Costa',
                'category' => 'Saúde',
                'published_at' => Carbon::now()->subDays(5),
                'views' => 2105,
                'is_featured' => true,
            ],
            [
                'title' => 'Startup Brasileira Recebe Investimento de R$ 100 Milhões',
                'slug' => 'startup-brasileira-recebe-investimento-de-r-100-milhoes',
                'summary' => 'Empresa de agrotech atrai investimento recorde de fundo internacional para expandir operações.',
                'content' => '<p>Uma startup brasileira de tecnologia agrícola anunciou hoje que recebeu um investimento de R$ 100 milhões de um fundo de venture capital internacional. A empresa, que desenvolve soluções de inteligência artificial para otimização do plantio e colheita, planeja usar os recursos para expandir suas operações para outros países da América Latina.</p>
                             <p>Este é um dos maiores investimentos já realizados em uma startup brasileira de agrotech. "Este investimento nos permitirá acelerar nosso crescimento e levar nossa tecnologia para mais agricultores", disse o CEO da empresa.</p>
                             <p>O setor de agrotech tem crescido significativamente no Brasil, atraindo atenção de investidores internacionais.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Roberto Alves',
                'category' => 'Negócios',
                'published_at' => Carbon::now()->subDays(1),
                'views' => 876,
                'is_featured' => true,
            ],
            [
                'title' => 'Mudanças Climáticas: Novas Metas para 2030',
                'slug' => 'mudancas-climaticas-novas-metas-para-2030',
                'summary' => 'Líderes mundiais se reúnem para estabelecer novas metas de redução de emissões de carbono.',
                'content' => '<p>Em uma reunião histórica, líderes mundiais anunciaram um pacote abrangente de políticas ambientais para enfrentar as mudanças climáticas. As medidas incluem incentivos para energia solar e eólica, restrições à emissão de carbono e investimentos em tecnologias verdes.</p>
                             <p>As novas metas estabelecem uma redução de 50% nas emissões até 2030, em comparação com os níveis de 1990. Ambientalistas celebram as decisões, mas alertam que a implementação rápida é crucial para atingir as metas do Acordo de Paris.</p>
                             <p>"Estamos em um ponto crítico na luta contra as mudanças climáticas", disse um representante da ONU. "Ações concretas são necessárias agora."</p>',
                'image_url' => 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Carlos Mendes',
                'category' => 'Meio Ambiente',
                'published_at' => Carbon::now()->subDays(3),
                'views' => 892,
                'is_featured' => false,
            ],
            [
                'title' => 'Universidades Adotam Inteligência Artificial no Ensino',
                'slug' => 'universidades-adotam-inteligencia-artificial-no-ensino',
                'summary' => 'Instituições de ensino implementam IA para personalizar aprendizado e melhorar resultados.',
                'content' => '<p>Universidades em todo o mundo estão incorporando inteligência artificial em seus métodos de ensino. Sistemas de IA são usados para personalizar o aprendizado, identificar estudantes com dificuldades e criar conteúdos educacionais adaptativos.</p>
                             <p>"A IA nos permite oferecer uma experiência de aprendizado mais personalizada para cada aluno", explica a professora Fernanda Lima. "Os resultados têm sido muito positivos."</p>
                             <p>Estudos mostram que o uso de IA na educação pode aumentar a retenção de conhecimento em até 30%.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Fernanda Lima',
                'category' => 'Educação',
                'published_at' => Carbon::now()->subDays(7),
                'views' => 543,
                'is_featured' => false,
            ],
            [
                'title' => 'Tecnologia no Esporte: Análise em Tempo Real',
                'slug' => 'tecnologia-no-esporte-analise-em-tempo-real',
                'summary' => 'Novas tecnologias estão revolucionando a análise de desempenho de atletas.',
                'content' => '<p>O Comitê Olímpico Internacional anunciou a implementação de tecnologias avançadas de análise de desempenho para as próximas competições. Sensores vestíveis, câmeras de alta velocidade e inteligência artificial serão usados para fornecer dados em tempo real sobre o desempenho dos atletas.</p>
                             <p>A tecnologia visa melhorar a precisão das avaliações, prevenir lesões e oferecer aos espectadores uma experiência mais envolvente. Alguns atletas já começaram a treinar com essas ferramentas em preparação para os próximos jogos.</p>
                             <p>"Esta tecnologia está mudando a forma como treinamos e competimos", disse um atleta olímpico.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Pedro Santos',
                'category' => 'Esportes',
                'published_at' => Carbon::now()->subDays(4),
                'views' => 987,
                'is_featured' => false,
            ],
            [
                'title' => 'Blockchain: Além das Criptomoedas',
                'slug' => 'blockchain-alem-das-criptomoedas',
                'summary' => 'Tecnologia blockchain encontra aplicações em diversas áreas além do mercado financeiro.',
                'content' => '<p>A tecnologia blockchain, conhecida por ser a base das criptomoedas, está encontrando aplicações em diversas outras áreas. Empresas estão usando blockchain para rastrear cadeias de suprimentos, verificar autenticidade de produtos e garantir segurança em transações digitais.</p>
                             <p>No setor de saúde, blockchain está sendo usado para proteger registros médicos. Na logística, ajuda a rastrear produtos desde a origem até o consumidor final.</p>
                             <p>"O potencial do blockchain vai muito além das criptomoedas", afirma um especialista em tecnologia.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Juliana Martins',
                'category' => 'Tecnologia',
                'published_at' => Carbon::now()->subDays(6),
                'views' => 654,
                'is_featured' => false,
            ],
            [
                'title' => 'Saúde Mental no Ambiente de Trabalho',
                'slug' => 'saude-mental-no-ambiente-de-trabalho',
                'summary' => 'Empresas implementam programas para promover saúde mental dos funcionários.',
                'content' => '<p>Com o aumento do trabalho remoto e as pressões do mundo moderno, as empresas estão implementando programas para promover a saúde mental de seus funcionários. Iniciativas incluem sessões de terapia online, programas de mindfulness e políticas de trabalho flexível.</p>
                             <p>Estudos mostram que investir na saúde mental dos funcionários melhora a produtividade, reduz o absenteísmo e aumenta a retenção de talentos.</p>
                             <p>"Cuidar da saúde mental não é apenas uma questão de bem-estar, é também um bom negócio", diz uma especialista em recursos humanos.</p>',
                'image_url' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'author' => 'Ana Costa',
                'category' => 'Saúde',
                'published_at' => Carbon::now()->subDays(8),
                'views' => 432,
                'is_featured' => false,
            ],
        ];

        foreach ($newsData as $news) {
            News::create($news);
        }

        // Criar notícias adicionais usando Factory
        News::factory()->count(12)->create();
    }
}