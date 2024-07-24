# User Authentication System with JWT

This project is a Node.js application built using Express and MySQL for robust user authentication. It includes user registration, login functionality, and secure authentication using JSON Web Tokens (JWT).

## Features

- **User Registration**: Create new accounts with secure password hashing.
- **User Login**: Authenticate users and issue JWTs.
- **Protected Routes**: Access secure endpoints with JWT validation.
- **Token Validation**: Ensure only the latest token is valid.
- **User-friendly Interface**: HTML/CSS forms for registration, login, and token validation.

## Screenshots

![auth](https://github.com/user-attachments/assets/9ed21913-7fa0-4ec2-b8a7-69c733c03b01)
![token](https://github.com/user-attachments/assets/e46c9ccd-60a1-4745-8710-02484688310c)
![tokens](https://github.com/user-attachments/assets/a653e498-03e5-4e13-bdd2-8fecdbadac0c)


### Prerequisites

- Node.js
- MySQL
- XAMPP or a similar server for MySQL

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/user-authentication-system.git
    cd user-authentication-system
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the MySQL database:
    - Create a new database and run the provided SQL script in `schema.sql` to set up the tables.

4. Configure environment variables:
    - Create a `.env` file in the root directory and add the following:
        ```
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=yourpassword
        DB_NAME=yourdatabase
        JWT_SECRET=yourjwtsecret
        ```

5. Run the application:
    ```sh
    npm start
    ```

### Directory Structure

- **public/**: Static assets (HTML, CSS, JS)
- **routes/**: API routes
- **models/**: Database models
- **middleware/**: JWT validation middleware

### Tech Stack

- Node.js
- Express
- MySQL
- JSON Web Tokens (JWT)
- HTML/CSS/JavaScript

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Register a new user or login with existing credentials.
3. Use the generated JWT token to access protected routes.

