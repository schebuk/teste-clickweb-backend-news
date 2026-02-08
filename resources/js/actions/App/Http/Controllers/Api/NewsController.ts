import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/news',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
index.url = (options?: RouteQueryOptions) => {




    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::index
* @see app/Http/Controllers/Api/NewsController.php:16
* @route '/api/v1/news'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
export const featured = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

featured.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/featured',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
featured.url = (options?: RouteQueryOptions) => {




    return featured.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
featured.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: featured.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
featured.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: featured.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
const featuredForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
featuredForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::featured
* @see app/Http/Controllers/Api/NewsController.php:143
* @route '/api/v1/news/featured'
*/
featuredForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: featured.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

featured.form = featuredForm

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
export const recent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recent.url(options),
    method: 'get',
})

recent.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/recent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
recent.url = (options?: RouteQueryOptions) => {




    return recent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
recent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
recent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recent.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
const recentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
recentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recent.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::recent
* @see app/Http/Controllers/Api/NewsController.php:195
* @route '/api/v1/news/recent'
*/
recentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: recent.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

recent.form = recentForm

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
export const popular = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popular.url(options),
    method: 'get',
})

popular.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/popular',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
popular.url = (options?: RouteQueryOptions) => {




    return popular.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
popular.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: popular.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
popular.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: popular.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
const popularForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: popular.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
popularForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: popular.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::popular
* @see app/Http/Controllers/Api/NewsController.php:220
* @route '/api/v1/news/popular'
*/
popularForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: popular.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

popular.form = popularForm

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
export const categories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

categories.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
categories.url = (options?: RouteQueryOptions) => {




    return categories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
categories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
categories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: categories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
const categoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
categoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::categories
* @see app/Http/Controllers/Api/NewsController.php:169
* @route '/api/v1/news/categories'
*/
categoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: categories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

categories.form = categoriesForm

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
export const byCategory = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byCategory.url(args, options),
    method: 'get',
})

byCategory.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/category/{category}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
byCategory.url = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { category: args }
    }


    if (Array.isArray(args)) {
        args = {
            category: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        category: args.category,
    }

    return byCategory.definition.url
            .replace('{category}', parsedArgs.category.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
byCategory.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: byCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
byCategory.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: byCategory.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
const byCategoryForm = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
byCategoryForm.get = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byCategory.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::byCategory
* @see app/Http/Controllers/Api/NewsController.php:245
* @route '/api/v1/news/category/{category}'
*/
byCategoryForm.head = (args: { category: string | number } | [category: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: byCategory.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

byCategory.form = byCategoryForm

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
export const show = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/news/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
show.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }


    if (Array.isArray(args)) {
        args = {
            slug: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        slug: args.slug,
    }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
show.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
show.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
const showForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
showForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\NewsController::show
* @see app/Http/Controllers/Api/NewsController.php:93
* @route '/api/v1/news/{slug}'
*/
showForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const NewsController = { index, featured, recent, popular, categories, byCategory, show }

export default NewsController