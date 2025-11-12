# CommerceCult App Backend

## Overview

CommerceCult App is a full-stack application that integrates with OpenAI's GPT-4o and Stripe for payment processing. This README provides instructions for setting up and running the backend of the application.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Docker (for containerization)
- A Stripe account for payment processing
- An OpenAI account for AI services

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd CommerceCult_app_v2/backend
   ```

2. **Create Environment Variables**

   Create a `.env` file in the `backend/` directory using the `.env.example` as a template. Fill in your OpenAI and Stripe keys.

3. **Install Dependencies**

   Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

4. **Run the Application**

   To start the backend server, use the following command:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000`.

5. **Access the API**

   You can test the API by navigating to `http://localhost:5000/api/ai` in your browser. If everything is set up correctly, you should receive a JSON response.

## Docker Setup

To run the backend application in a Docker container, follow these steps:

1. **Build the Docker Image**

   ```bash
   docker-compose build
   ```

2. **Run the Docker Container**

   ```bash
   docker-compose up
   ```

   This will start the backend service in a Docker container.

## Directory Structure

- `src/`: Contains the source code for the backend application.
  - `app.js`: Initializes the Express application.
  - `server.js`: Entry point for starting the server.
  - `routes/`: Contains API route definitions.
  - `controllers/`: Contains request handling logic.
  - `services/`: Contains logic for interacting with external APIs (OpenAI, Stripe).
  - `config/`: Configuration settings and environment variable loading.
  - `middleware/`: Authentication middleware.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.