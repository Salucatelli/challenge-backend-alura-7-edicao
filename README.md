# Challenge Backend Alura 7ª Edição

# Jornada Milhas

## Sobre o Projeto

  Este é a minha versão da Challenge de Backend da Alura, onde o principal objetivo é desenvolver uma API que será integrada ao Frontend disponibilizando informações e recursos do banco de dados relacionados a possíveis destinos de viagem, exibindo fotos e um texto chamativo que instiga o usuário a querer visitar aquele destino.

Além disso, a aplicação também irá disponibilizar recursos sobre depoimentos de outras pessoas viajantes e, para finalizar, será integrada a IA (Inteligencia Artificial).

## Tecnologias Utilizadas
- Node.Js
- Express
- Sequelize
- MySQL

 #

## Semana 1

  O desafio da primeira semana consiste em 4 passos:
  - CRUD de Depoimentos
  - Endpoint de depoimento
  - Configuração do CORS
  - Teste

### **CRUD de Depoimentos**

 O CRUD de depoimentos possui 1 endpoint com 4 metodos HTTP (GET, POST, PUT e DELETE)

  - **"/depoimentos" GET:**
  
    - Essa rota responde um array com todos os depoimentos cadastrados no banco de dados em formato JSON.


  - **"/depoimentos" POST**

     - Essa rota recebe como parametros um nome (da pessoa que escreveu o depoimento) o depoimento (texto com uma descrição) e uma imagem.
    
      ```
      {
        "nome": "nome da pessoa",
        "depoimento": "texto",
        "img": "imagem"
       } 
      ```


- **"/depoimentos/:id" PUT**
  - Essa rota recebe como parametro por URL o ID do elemento que deseja ser alterado elementos que deseja ser alterado, e recebe um JSON pelo Body o que deseja ser alterado **(OBS, Não é possivel alterar a imagem)**
 
  ```
  {
    "nome": "nome da pessoa",
    "depoimento": "texto",
   } 
  ```

- **"/depoimentos/:id" DELETE**
   - Essa rota recebe um id como parametro pela URL, e deleta o depoimento com o mesmo id que for informado na URL.
 

### Endpoint de Depoimento
  Endpoint "/depoimentos-home", mostra 3 depoimentos armazenados no banco de dedos em ordem aleatória.

### Configuração do CORS
  O CORS serve para liberar outras ULRs fazerem requisições na API, no momento o CORS está liberado para qualquer URL, mas quando uma aplicação vai para um ambiente de produção, deve-se liberar apenas as URLs necessarias para o desenvolvimento, garantindo assim a maior segurança das informações do projeto.

### Teste
  Todos os testes de funcionamento da API foram realizados utilizando o Postman, um aplicativo que permite fazer requisições HTTP sem a necessidade de um FrontEnd.

#

## Semana 2

  O desafio da segunda semana consiste em 3 passos:
  - CRUD de Destinos
  - Endpoint de busca de destinos
  - Teste

### **CRUD de Destinos**

 O CRUD de Destinos tem 1 endpoint com 4 metodos HTTP (GET, POST, PUT e DELETE)

  - **"/destinos" GET:**
  
    - Essa rota responde um array com todos os destinos cadastrados no banco de dados em formato JSON.


  - **"/destinos" POST**

     - Essa rota recebe como parametros um nome (do destino) o preço e uma imagem.
    
      ```
      {
        "nome": "nome da pessoa",
        "preco": "numero",
        "img": "imagem"
       } 
      ```


- **"/destinos/:id" PUT**
  - Essa rota recebe como parametro por URL o ID do elemento que deseja ser alterado elementos que deseja ser alterado, e recebe um JSON pelo Body o que deseja ser alterado **(OBS, Não é possivel alterar a imagem)**
 
  ```
  {
    "nome": "nome da pessoa",
    "depoimento": "texto",
   } 
  ```

- **"/destinos/:id" DELETE**
   - Essa rota recebe um id como parametro pela URL, e deleta o destino com o mesmo id que for informado na URL.
 

### Endpoint de Destinos
  Endpoint "/depoimentos?nome="nome do destino", filtra pelo nome do destino.

### Teste
  Todos os testes de funcionamento da API foram realizados utilizando o Postman, um aplicativo que permite fazer requisições HTTP sem a necessidade de um FrontEnd.

> ### Em breve disponibilizarei o código da semana 3 e 4 que ainda está em produção. Obrigado por gastar um tempo prestigiando meu trabalho, espero que goste!





