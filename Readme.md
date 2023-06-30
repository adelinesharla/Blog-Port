# Blog Desafio

Este é o backend do projeto de um blog desenvolvido com Node.js. Ele fornece a API para realizar operações CRUD (criar, ler, atualizar e excluir) em users, posts e comentários, lidando com a lógica do servidor. Além disso, também oferece a funcionalidade de gerar relatórios com informações sobre os posts, incluindo a quantidade de comentários, curtidas e visualizações de cada post.

## Arquitetura de Camadas

Este projeto utiliza a arquitetura de camadas para manter uma estrutura organizada e modular. O código está dividido em controllers, services, repositories, models e routes, garantindo uma separação clara das responsabilidades e facilitando a manutenção do sistema.

- Os controllers são responsáveis por receber as requisições HTTP, lidar com a entrada do usuário e acionar os serviços correspondentes para processar a lógica de negócio. Eles também são responsáveis por retornar as respostas adequadas para as requisições.
- Os services contêm a lógica de negócio principal do sistema. Eles utilizam os repositories para acessar os dados do banco de dados, realizam validações adicionais, aplicam regras de negócio e processam os dados conforme necessário.
- Os models representam os objetos do banco de dados e definem os esquemas, estruturas e operações de acesso aos dados. Eles são responsáveis por representar as entidades do domínio e as relações entre elas.
- Os repositories são responsáveis por abstrair o acesso ao banco de dados. Eles encapsulam as consultas e operações de persistência de dados, permitindo que os services interajam com o banco de dados de forma mais modular e independente.
- As routes definem as rotas da API, mapeando os endpoints para os controllers adequados. Elas determinam a estrutura da API e a forma como os endpoints podem ser acessados.

## Stack Utilizada

- Node.js (v14.17.0): Plataforma de tempo de execução JavaScript do lado do servidor.
- Express (v4.17.1): Framework web minimalista para Node.js, utilizado para lidar com as rotas e requisições HTTP.
- Mongoose (v6.0.1): Biblioteca do Node.js para modelagem de objetos do MongoDB, utilizada para se conectar e interagir com o banco de dados.
- MongoDB: Banco de dados NoSQL utilizado para armazenar os dados do blog.

## Como Executar

Siga as etapas abaixo para executar o backend do sistema e realizar os testes:

1. Certifique-se de ter o Node.js (v14.17.0 ou superior) e o MongoDB instalados em seu sistema.

2. Clone este repositório para o seu ambiente local.

3. Navegue até o diretório do projeto no terminal ou prompt de comando.

4. Instale as dependências do projeto utilizando o seguinte comando:

   ```
   npm install
   ```

   As seguintes dependências serão instaladas:

   ```
   bcrypt: ^5.1.0
   body-parser: ^1.20.2
   connect-mongodb-session: ^3.1.1
   dotenv: ^16.3.1
   express: ^4.18.2
   express-session: ^1.17.3
   mongoose: ^7.3.1
   multer: ^1.4.5-lts.1
   ```

5. Inicie o servidor executando o seguinte comando:

   ```
   node server.js
   ```

   O servidor estará em execução e fornecerá a API para interagir com o backend do blog.

6. O frontend do blog pode ser desenvolvido separadamente e pode consumir essa API para exibir e manipular os dados do blog.

## API Endpoints

A API oferece os seguintes endpoints para interagir com o backend do blog:

### Posts

- **GET /posts**: Retorna todos os posts do blog.
- **GET /posts/:id**: Retorna um post específico com base no ID fornecido.
- **POST /posts**: Cria um novo post no blog.
- **PUT /posts/:id**: Atualiza um post existente com base no ID fornecido.
- **DELETE /posts/:id**: Exclui um post existente com base no ID fornecido.

### Comentários

- **GET /comments**: Retorna todos os comentários do blog.
- **GET /comments/:id**: Retorna um comentário específico com base no ID fornecido.
- **POST /comments**: Cria um novo comentário no blog.
- **PUT /comments/:id**: Atualiza um comentário existente com base no ID fornecido.
- **DELETE /comments/:id**: Exclui um comentário existente com base no ID fornecido.

### Relatórios

- **GET /reports/posts**: Gera um relatório com os posts do blog, incluindo o título e a quantidade de comentários de cada post.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).