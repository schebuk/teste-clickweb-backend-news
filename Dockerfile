FROM php:8.2-cli-alpine

# 1. Instalar dependências de COMPILAÇÃO primeiro
RUN apk add --no-cache \
    $PHPIZE_DEPS \
    libzip-dev \
    oniguruma-dev \
    postgresql-dev

# 2. Instalar extensões PHP
RUN docker-php-ext-install pdo pdo_mysql mbstring zip

# 3. Instalar Node.js e npm
RUN apk add --no-cache nodejs npm

# 4. Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html
COPY . .

# 5. Verificar se temos os arquivos necessários
RUN echo "=== Conteúdo do diretório ===" && ls -la
RUN echo "=== composer.json? ===" && [ -f composer.json ] && cat composer.json || echo "Não tem composer.json"

# 6. Instalar dependências PHP (se tiver composer.json)
RUN if [ -f composer.json ]; then \
    composer install --no-dev --optimize-autoloader --ignore-platform-reqs; \
    else \
    echo "Pulando composer install - sem composer.json"; \
    fi

# 7. Instalar dependências Node (se tiver package.json)
RUN if [ -f package.json ]; then \
    npm install --legacy-peer-deps; \
    npm run production || npm run build || echo "Build falhou"; \
    else \
    echo "Pulando npm install - sem package.json"; \
    fi

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
