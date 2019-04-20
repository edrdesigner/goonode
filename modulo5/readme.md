## Instalar pg no docker

- run `docker run --name databasepg -p 5432:5432 -d -t kartoza/postgis`

### Criando uma migration

- run `yarn sequelize migration:create --name=create-users`
- run `yarn sequelize db:migrate`
