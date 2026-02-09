FROM php:8.2-cli

# Instalar dependências
RUN apt-get update && apt-get install -y \
    curl \
    libonig-dev \
    libzip-dev \
    zip \
    unzip

# Instalar Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Instalar extensões PHP
RUN docker-php-ext-install pdo pdo_mysql mbstring zip

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

# Instalar dependências
RUN composer install --no-dev --optimize-autoloader
RUN npm install
RUN npm run production

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]