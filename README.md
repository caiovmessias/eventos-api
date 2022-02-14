# Eventos API
API Backend em Typescript para busca e compra de ingressos para eventos de empresas e universidades

<p><strong>URL do projeto em produção: https://caio-eventos-api.herokuapp.com/</strong>

## Execução

Para executar o projeto em sua máquina é necessário possuir o Docker e o Docker compose instalados e configurados.

Collection disponibilizada no diretório `docs/collection`.

Portas utilizadas pelo projeto:
- API: **3000**
- Postgres: **5432**

### Primeira execução do projeto

1. Clone o projeto  
`git clone https://github.com/caiovmessias/node_api.git`

2. Acessa a pasta do projeto e suba o container do Postgres  
`docker-compose up -d postgres`

3. Cria o banco de dados `eventos`  
`docker exec -it eventos-api_postgres_1 sh -c 'echo "CREATE DATABASE eventos;" | psql -U postgres'`

4. Rode o comando abaixo para instalar as dependências e executar as migrations  
`make setup`

5. Agora basta subir o container da API  
`make up`

Comandos uteis após a configuração do projeto:

- Iniciar o container da API e do Postgres  
`make up`

- Parar os containers da API e do Postgres  
`make down`

Para visualizar outros comandos, acesse o arquivo `Makefile`  

## Requisitos
- **Organizador**  
O sistema deverá permitir que seja cadastrado um organizador;  
O sistema não deverá permitir que seja cadastrado um organizador com o mesmo nome;
O sistema deverá permitir que seja atualizado um organizador;  
O sistema deverá permitir que seja removido um organizador;  
O sistema deverá listar os organizadores;  
O sistema deverá listar um organizador a partir do id;

- **Evento**  
O sistema deverá permitir que seja possível cadastrar um novo evento;  
O sistema deverá permitir que seja possível atualizar um evento existente;  
O sistema não deverá permitir que seja possível atualizar um evento que já ocorreu;  
O sistema deverá permitir que seja removido um evento existente;  
O sistema deverá listar todos os eventos que ainda não ocorreram;  

- **Ingresso**  
O sistema deverá permitir que seja realizado a compra de um ou mais ingressos;  
O sistema não deverá permitir a compra de eventos que já ocorreram;  
O sistema deverá permitir a atualização do ingresso por meio do organizador;  
O sistema deverá listar os ingressos disponíveis para compra;  

- **Usuario**  
O sistema deverá permitir que seja realizado o cadastro de um usuário;  
O sistema não deverá permitir que seja realizado o cadastro de um usuário com o mesmo e-mail;  
O sistema deverá permitir que seja possível atualizar um usuário;  
O sistema deverá permitir que seja possível excluir um usuário;  
O sistema deverá permitir listar todos os ingressos comprados pelo usuário;  
