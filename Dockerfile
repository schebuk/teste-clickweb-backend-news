FROM php:8.2-cli-alpine

RUN apk add --no-cache \
    curl \
    git \
    unzip \
    nodejs \
    npm

RUN docker-php-ext-install pdo pdo_mysql mbstring

RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html
COPY . .

# Apenas roda composer install SE composer.json existir
RUN if [ -f composer.json ]; then \
    composer install --no-dev --optimize-autoloader --ignore-platform-reqs; \
    else \
    echo "composer.json não encontrado, pulando composer install"; \
    fi

# Apenas roda npm install SE package.json existir
RUN if [ -f package.json ]; then \
    npm install --legacy-peer-deps; \
    npm run build; \
    else \
    echo "package.json não encontrado, pulando npm"; \
    fi

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
