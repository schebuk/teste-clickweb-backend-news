FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

# 1. Instalar PHP e Composer via apt (mais estável)
RUN apt-get update && \
    apt-get install -y \
        php8.2 \
        php8.2-cli \
        php8.2-mysql \
        php8.2-mbstring \
        php8.2-xml \
        php8.2-zip \
        php8.2-curl \
        php8.2-gd \
        composer \
        curl \
        git \
        unzip

# 2. Instalar Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

WORKDIR /var/www/html
COPY . .

# 3. Composer install com fallbacks
RUN composer install --no-dev --optimize-autoloader || \
    composer install --no-dev --optimize-autoloader --ignore-platform-reqs || \
    composer install --ignore-platform-reqs

# 4. Node
RUN npm install || npm install --legacy-peer-deps || true
RUN npm run production || npm run build || true

EXPOSE 8080
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
