# API RestFull

A API funciona fazendo request para endpoins solicitados.
* Knex
* Express
* TypeScript


### Execução
Após o clone do projeto, execute o seguinte comando:

### `yarn install `

Este comando instalará todas as dependências necessárias, 

Após a instalação executar o comando para criar a base em arquivos

### `yarn knex:migrate`

Em seguida executar o comando para popular a tabelas

### `yarn knex:seed`

Agora pode executar o comando para subir o serviço e consultar os endpoints

### `yarn dev`

Se o navegador não for iniciado automaticamente, a aplicação pode ser encontrada no endereço [http://localhost:3331](http://localhost:3331).

# Test

Caso queria rodar os testes de integração existente basta rodar :

### `yarn test`