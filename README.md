# Desafio Node.js - Rocketseat

Este projeto é uma API desenvolvida em Node.js como parte do desafio Rocketseat. Utiliza Fastify, Drizzle ORM e TypeScript para gerenciar cursos em um banco de dados.

## Funcionalidades

- **Listar cursos**: Retorna todos os cursos cadastrados.
- **Buscar curso por ID**: Retorna os detalhes de um curso específico pelo seu UUID.
- **Cadastrar curso**: Permite adicionar novos cursos ao banco de dados.

## Tecnologias Utilizadas

- Node.js
- Fastify
- TypeScript
- Drizzle ORM
- Docker (opcional, via `docker-compose.yml`)

## Estrutura do Projeto

```
├── docker-compose.yml
├── drizzle.config.ts
├── package.json
├── server.ts / server.js
├── routes/
│   ├── get-courses.ts
│   ├── get-courses-by-id.ts
│   └── post-courses.ts
├── src/
│   └── database/
│       ├── client.ts
│       └── schema.ts
```

## Como rodar o projeto

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Configure o banco de dados**:
   - Edite o arquivo `drizzle.config.ts` conforme necessário.
   - Utilize o Docker para subir o banco de dados, se desejar:
     ```bash
     docker-compose up -d
     ```

3. **Execute as migrações**:
   - As migrações estão na pasta `drizzle/`.

4. **Inicie o servidor**:
   ```bash
   npm run dev
   ```
   ou
   ```bash
   node server.js
   ```

## Rotas da API

- `GET /courses` — Lista todos os cursos.
- `GET /courses/:id` — Busca curso pelo UUID.
- `POST /courses` — Cadastra um novo curso.

## Testando a API

Você pode utilizar o arquivo `requisições.http` ou ferramentas como Insomnia/Postman para testar as rotas.

## Licença

Este projeto é apenas para fins de estudo/desafio.
