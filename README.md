# Vignan Institute of Technology and Science Website

This is a full-stack web application for the Vignan Institute of Technology and Science, built with the MERN stack.

## Features

-   **Frontend:** React with Vite and Tailwind CSS
-   **Backend:** Node.js with Express
-   **Database:** MongoDB with Mongoose
-   **Full-stack:** Frontend and backend are in the same project and can be run concurrently.
-   **Contact Form:** A contact form that saves messages to the database.
-   **Admin Route:** An admin route to view all messages.

## Prerequisites

-   Node.js
-   npm
-   MongoDB

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/vignan-website.git
    cd vignan-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    npm install --prefix client
    npm install --prefix server
    ```
3.  **Set up environment variables:**
    -   Create a `.env` file in the `server` directory.
    -   Add your MongoDB connection string to the `.env` file:
        ```
        MONGO_URI=your_mongodb_connection_string
        ```
4.  **Run the application:**
    ```bash
    npm run dev
    ```
    This will start both the client and server concurrently.
    -   The client will be running on `http://localhost:3000`.
    -   The server will be running on `http://localhost:5000`.

## API Endpoints

-   `POST /api/contact`: Submit a contact form.
-   `GET /api/contacts`: Get all contact messages.
