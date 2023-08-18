# Challenge Blog

This is the backend of a blog project developed with Node.js. It provides the API to perform CRUD (create, read, update, and delete) operations on users, posts, and comments, handling server logic. Additionally, it offers the functionality to generate reports with information about the posts, including the number of comments, likes, and views for each post.

## Layered Architecture

This project utilizes a layered architecture to maintain an organized and modular structure. The code is divided into controllers, services, repositories, models, and routes, ensuring a clear separation of responsibilities and facilitating system maintenance.

- Controllers are responsible for receiving HTTP requests, handling user input, and triggering the corresponding services to process business logic. They are also in charge of returning appropriate responses to the requests.
- Services contain the system's primary business logic. They use repositories to access database data, perform additional validations, apply business rules, and process data as needed.
- Models represent the database objects and define the schemas, structures, and data access operations. They are responsible for representing domain entities and the relationships between them.
- Repositories abstract database access. They encapsulate queries and data persistence operations, allowing services to interact with the database in a more modular and independent manner.
- Routes define the API's paths, mapping the endpoints to the appropriate controllers. They determine the API's structure and how endpoints can be accessed.

## Used Stack

- Node.js (v14.17.0): A server-side JavaScript runtime environment.
- Express (v4.17.1): A minimalist web framework for Node.js, used for handling routes and HTTP requests.
- Mongoose (v6.0.1): A Node.js library for MongoDB object modeling, used to connect and interact with the database.
- MongoDB: A NoSQL database used to store the blog's data.

## How to Run

Follow the steps below to run the system's backend and perform tests:

1. Make sure you have Node.js (v14.17.0 or higher) and MongoDB installed on your system.

2. Clone this repository to your local environment.

3. Navigate to the project directory in the terminal or command prompt.

4. Install the project dependencies using the following command:

   ```
   npm install
   ```

   The following dependencies will be installed:

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
5. Create a .env file with the following configurations:

   ```
   PORT=server_port
   DB_STR=mongodb_connection_string
   SECRET_KEY=secret_key
   API_KEY=fixed_token
   ```
   
6. Start the server by executing the following command:

   ```
   npm run start
   npm run dev
   ```

   The server will be running and will provide the API to interact with the blog's backend.

7. The blog's frontend can be developed separately and can consume this API to display and manipulate the blog data.

## API Endpoints

The API provides the following endpoints to interact with the blog's backend:

### Posts

- **GET /posts**: Returns all blog posts.
- **GET /posts/:id**: Returns a specific post based on the provided ID.
- **POST /posts**: Creates a new post on the blog.
- **PUT /posts/:id**: Updates an existing post based on the provided ID.
- **DELETE /posts/:id**: Deletes an existing post based on the provided ID.

### Comments

- **GET /comments**: Returns all blog comments.
- **GET /comments/:id**: Returns a specific comment based on the provided ID.
- **POST /comments**: Creates a new comment on the blog.
- **PUT /comments/:id**: Updates an existing comment based on the provided ID.
- **DELETE /comments/:id**: Deletes an existing comment based on the provided ID.

### Reports

- **GET /reports/posts**: Generates a report with blog posts, including the title and the number of comments for each post.

## License

This project is licensed under the [MIT License](LICENSE).
