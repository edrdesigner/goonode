# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Generate App Key

- Run `adonis key:generate` to re-generate the APP_KEY and save it inside the .env file.

## Listen kue jobs

- Run `adonis kue:listen`

## Start dev server

- Run `adonis serve --dev` to run the server

## Docker com redis

- Run `docker run --name redis -p 6379:6379 -d redis:alpine`
