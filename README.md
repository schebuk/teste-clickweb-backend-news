🚀 Tecnologias
Backend: Laravel 12, PHP 8.3

Frontend: React 18, TypeScript, Vite

UI: React Bootstrap, Bootstrap Icons

Banco de dados: SQLite (desenvolvimento)

Bundler: Vite com HMR (Hot Module Replacement)

📁 Estrutura do Projeto
```text
backend1/
├── resources/
│   ├── js/
│   │   ├── index.tsx          # Entry point da aplicação React
│   │   ├── App.tsx           # Componente raiz
│   │   ├── bootstrap.ts      # Configurações globais
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── pages/           # Páginas (NewsList, NewsDetail)
│   │   ├── layouts/         # Layouts da aplicação
│   │   └── services/        # Chamadas API
│   ├── views/               # Templates Blade
│   └── css/                 # Estilos CSS/SASS
├── routes/
│   ├── web.php              # Rotas web
│   └── api.php              # Rotas API
├── database/
│   ├── migrations/          # Migrações do banco
│   └── seeders/            # Seeders de dados
└── public/build/           # Assets compilados pelo Vite
```
🛠️ Pré-requisitos
PHP 8.2+

Composer

Node.js 18+

npm ou yarn

SQLite (ou MySQL/PostgreSQL)

⚡ Instalação Rápida
1. Clone e instale dependências
```bash
# Clone o repositório
git clone [seu-repositorio]
cd teste-clickweb/backend1

# Instale dependências PHP
composer install

# Instale dependências Node.js
npm install
```
2. Configure o ambiente
```bash
# Copie o arquivo de ambiente
cp .env.example .env

# Gere a chave da aplicação
php artisan key:generate

# Configure o banco de dados (SQLite)
touch database/database.sqlite
```
No arquivo .env, configure:

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```
3. Configure o banco de dados
```bash
# Execute migrações
php artisan migrate

# (Opcional) Execute seeders
php artisan db:seed
```
🚀 Executando a Aplicação
Opção 1: Desenvolvimento com HMR (Recomendado)
```bash
# Terminal 1 - Backend Laravel
php artisan serve

# Terminal 2 - Frontend Vite (Hot Module Replacement)
npm run dev
Acesse: http://localhost:8000
```
Opção 2: Build de produção
```bash
# Compile os assets
npm run build

# Execute apenas o Laravel
php artisan serve
```
Acesse: http://localhost:8000

Opção 3: Build e preview
```bash
# Build de produção
npm run build

# Preview do build
npm run preview
```
📦 Comandos Úteis
Desenvolvimento
```bash
# Iniciar Vite dev server
npm run dev

# Build de produção
npm run build

# Limpar cache do Vite
rm -rf public/build node_modules/.vite
```
Laravel
```bash
# Servir aplicação
php artisan serve

# Limpar caches
php artisan cache:clear
php artisan config:clear
php artisan view:clear

# Migrações
php artisan migrate
php artisan migrate:fresh
php artisan migrate:refresh
Manutenção
bash
# Instalar dependências
npm install [pacote] --save-dev

# Atualizar dependências
npm update

# Verificar problemas
npm audit
```
🔧 Configurações
Vite (vite.config.js)
```javascript
export default {
    build: {
        outDir: 'public/build',
        manifest: true,
        rollupOptions: {
            input: 'resources/js/index.tsx'
        }
    }
}
Blade (welcome.blade.php)
blade
<!DOCTYPE html>
<html>
<head>
    @vite(['resources/js/index.tsx'])
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
🎨 Features Implementadas
✅ Frontend React com TypeScript
✅ Roteamento com React Router
✅ UI com React Bootstrap
✅ Hot Module Replacement (Vite)
✅ Layout responsivo
✅ Sistema de notícias
✅ Componentes reutilizáveis
✅ Integração Laravel + React

📱 Páginas da Aplicação
/ - Lista de notícias com cards

/news/:id - Detalhe da notícia com conteúdo completo

Navegação com React Router

Layout responsivo para mobile/desktop

🐛 Solução de Problemas
Erro: "Vite manifest not found"
```bash
rm -rf public/build
npm run build
php artisan cache:clear
```
Erro: "Port already in use"
```bash
# Mude a porta do Vite
# Em vite.config.js
server: {
    port: 5174
}
Erro: "Cannot find module"
bash
npm install
npm run build
```
Cache do navegador
Pressione Ctrl+Shift+R para hard refresh.

🔗 Endpoints API
Método	Endpoint	Descrição
GET	/api/news	Listar notícias
GET	/api/news/{id}	Detalhe da notícia
POST	/api/news	Criar notícia
PUT	/api/news/{id}	Atualizar notícia
DELETE	/api/news/{id}	Excluir notícia
📝 Variáveis de Ambiente
```env
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite

VITE_APP_NAME="News Portal"
VITE_DEV_SERVER_URL=http://localhost:5173
```
🚀 Deploy
Produção
```bash
# 1. Build dos assets
npm run build

# 2. Otimizar Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 3. Servir (usando Nginx/Apache)
# Configurar virtual host apontando para /public
```