<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aplicação</title>
    
    {{-- CORRIGIDO: Passa o array com entry point --}}
    @vite(['resources/js/index.tsx'])
    
    <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
        #root { min-height: 100vh; }
    </style>
</head>
<body>
    <div id="root">
        <div style="padding: 20px; text-align: center;">
            Carregando aplicação...
        </div>
    </div>
</body>
</html>