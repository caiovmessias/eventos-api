# Script utilizado para o setup e configuração do projeto

# Instala as dependências do projeto e cria node_modules
yarn

# Cria banco de dados que será utilizado pelo projeto
npx sequelize db:create

# Executa as migrations
npx sequelize db:migrate