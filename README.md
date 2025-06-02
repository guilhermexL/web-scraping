# Scraper da Amazon com Bun + Vite

Este é um projeto fullstack simples que coleta listagens de produtos da primeira página de resultados de busca da Amazon com base em uma palavra-chave inserida pelo usuário.

## Objetivo

Permitir que os usuários insiram uma palavra-chave de busca e visualizem as seguintes informações de cada produto encontrado:

* Título do produto
* Avaliação (estrelas)
* Número de avaliações
* URL da imagem do produto

## Tecnologias Utilizadas

### Backend

* [Bun](https://bun.sh/) – Runtime JavaScript ultrarrápido
* [Express](https://expressjs.com/)
* [Axios](https://axios-http.com/)
* [JSDOM](https://github.com/jsdom/jsdom)

### Frontend

* [Vite](https://vitejs.dev/)
* HTML, CSS e JavaScript puro (Vanilla JS)

## Como Executar o Projeto

### Pré-requisitos

* [Bun](https://bun.sh/docs/installation) instalado
* [Node.js e npm](https://nodejs.org/) para o frontend (Vite)

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/guilhermexL/web-scraping.git
   cd web-scraping/backend
   ```

2. Instale as dependências:

   ```bash
   bun install
   ```

3. Inicie o servidor:

   ```bash
   bun run dev
   ```
>[!NOTE]
> O backend estará disponível em `http://localhost:3000/api/scrape?keyword=exemplo`

### Frontend

1. Navegue até a pasta do frontend:

   ```bash
   cd ../frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

> O frontend geralmente roda em `http://localhost:5173`

### Importante: Rode em terminais separados

## Como Usar

1. Abra o frontend no seu navegador.
2. Digite uma palavra-chave de busca (ex: "notebook").
3. Clique no botão **Buscar**.
4. Os resultados coletados serão exibidos em um formato limpo.

## Notas Finais

* Fique atento: a Amazon pode bloquear requisições frequentes ou bots. Este projeto é apenas para fins educacionais.
* Se o layout da Amazon mudar, o scraping pode parar de funcionar. Nesse caso, será necessário atualizar os seletores HTML no código.

## Autor

Desenvolvido por [Guilherme](https://www.linkedin.com/in/guilhermee-santos/)
