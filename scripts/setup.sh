# Script utilizado para o setup e configuração do projeto

# Instala as dependências do projeto e cria node_modules
yarn

# Cria banco de dados
docker exec -it eventos-api_postgres_1 sh -c 'echo "CREATE DATABASE eventos;" | psql -U postgres'

# Executa as migrations
yarn typeorm migration:run