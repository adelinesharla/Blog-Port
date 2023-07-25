# Documento de Especificação de Requisitos: Sistema de Blog Portfólio

## 1. Introdução e Descrição Geral

Este documento descreve a especificação de requisitos para o desenvolvimento de um Sistema de Blog Portfólio. O sistema requer funcionalidades de autenticação, gerenciamento de usuários, postagens e comentários. A pilha de tecnologias utilizadas será NodeJS, Express e MongoDB.

## 2. Casos de Uso

### 2.1. Usuário Não Autenticado
UC001 - Registrar-se no sistema
UC002 - Autenticar-se no sistema

### 2.2. Usuário Autenticado
UC003 - Atualizar o próprio perfil
UC004 - Criar, atualizar e remover postagens
UC005 - Adicionar imagens à postagens
UC006 - Visualizar histórico de edições da postagem
UC007 - Criar, atualizar e remover comentários
UC008 - Remover comentários na própria postagem

## 3. Definição das Entidades do Sistema

As entidades que compõem o sistema são:

**a. Entidade Usuário (User):**

- id: Identificador único do usuário (chave primária).
- name: Nome do usuário (string, máximo de 100 caracteres).
- email: Endereço de e-mail do usuário (string, máximo de 191 caracteres).

**b. Entidade Postagem (Post):**

- id: Identificador único da postagem (chave primária).
- user_id: Identificador do usuário que criou a postagem (chave estrangeira, referência à entidade User).
- title: Título da postagem (string, máximo de 100 caracteres).
- description: Descrição da postagem (texto).

**c. Entidade Comentário (Comment):**

- id: Identificador único do comentário (chave primária).
- user_id: Identificador do usuário que fez o comentário (chave estrangeira, referência à entidade User).
- post_id: Identificador da postagem à qual o comentário pertence (chave estrangeira, referência à entidade Post).
- description: Descrição do comentário (texto).

## 4. Autenticação baseada em Tokens

UC002 - O sistema deve fornecer uma autenticação baseada em tokens para as chamadas da REST API, onde os usuários serão autenticados através de tokens gerados e anexados a cada requisição. 

## 5. Gerenciamento de Usuários

**a. CRUD Básico:**

UC001, UC003 - Criação, leitura, atualização e remoção de usuários.
NF001 - Implementação de uma verificação de permissões para operações que exigem autenticação.

**b. Perfil do Usuário Autenticado:**

UC003 - Usuários autenticados devem ser capazes de atualizar seus próprios perfis.

## 6. Gerenciamento de Postagens

**a. CRUD Básico:**

UC004 - Criação, leitura, atualização e remoção de postagens.
NF002 - Apenas o autor da postagem deve ter permissão para editar ou remover a mesma.

**b. Adição de Imagens:**

UC005 - As postagens devem permitir a adição de uma imagem, utilizando uma API dedicada para tal.

**c. Histórico de Edições:**

UC006 - As modificações feitas nas postagens devem ser armazenadas como histórico.

**d. Contador de Visualizações:**

NF003 - Cada postagem deve ter um contador de visualizações.

**e. Contador de Curtidas e Não Curtidas:**

NF004 - Cada postagem deve apresentar um contador de curtidas e não curtidas.

## 7. Gerenciamento de Comentários

**a. CRUD Básico:**

UC007 - Criação, leitura, atualização e remoção de comentários.
NF005 - Apenas o autor do comentário deve ter permissão para editá-lo ou removê-lo.

**b. Remoção de Comentários pelo Autor da Postagem:**

UC008 - O autor da postagem deve ter permissão para remover comentários associados à sua postagem.

**c. Marcador de Remoção:**

NF006 - Deve haver um marcador indicando se um comentário foi removido pelo usuário ou pelo autor da postagem.

**d. Notificação por E-mail:**

NF007 - Uma notificação por e-mail deve ser enviada ao autor da postagem quando um novo comentário for feito em sua postagem.

## 8. Geração de Relatórios

NF008 - O sistema deve ter um endpoint dedicado à geração de relatórios, incluindo as seguintes informações sobre as postagens:

- Título da postagem.
- Quantidade de comentários.
- Quantidade de visualizações.
- Quantidade de curtidas.
- Quantidade de não curtidas.

## 9. Documentação da API

NF009 - As chamadas da API devem ser documentadas usando uma ferramenta de requisição, como o Postman. O arquivo de configuração da ferramenta deve ser fornecido juntamente com a documentação.