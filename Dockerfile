# Use imagem Alpine (mais leve e sem problemas de apt)
FROM php:8.2-cli-alpine

# 1. Instalar dependências no Alpine (apk em vez de apt)
RUN apk add --no-cache \
    curl \
    git \
    unzip \
    nodejs \
    npm \
    libzip-dev \
    libpng-dev \
    oniguruma-dev \
    postgresql-dev

# 2. Instalar extensões PHP
RUN docker-php-ext-install pdo pdo_mysql mbstring zip gd

# 3. Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html
COPY . .

# 4. Composer install
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# 5. Node
RUN npm install --legacy-peer-deps
RUN npm run production || npm run build

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
