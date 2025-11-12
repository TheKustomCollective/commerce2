# CommerceCult App v2

Welcome to the CommerceCult App v2! This project is designed to provide a seamless integration of e-commerce functionalities with AI capabilities using OpenAI and payment processing through Stripe.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Integration with OpenAI's GPT-4o for AI-driven functionalities.
- Secure payment processing using Stripe.
- RESTful API for backend services.
- Docker support for easy deployment.

## Technologies

- Node.js
- Express.js
- OpenAI API
- Stripe API
- Docker
- MongoDB (or any other database you choose)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CommerceCult_app_v2.git
   cd CommerceCult_app_v2
   ```

2. Navigate to the backend directory and create a `.env` file based on the `.env.example` template:
   ```bash
   cd backend
   cp .env.example .env
   ```

3. Fill in your OpenAI and Stripe keys in the `.env` file.

4. Install the backend dependencies:
   ```bash
   npm install
   ```

5. (Optional) If you want to run the application using Docker, build the Docker image:
   ```bash
   docker-compose up --build
   ```

## Usage

To start the backend server, run:
```bash
npm run dev
```
The server will be running on `http://localhost:5000`.

You can access the API at `http://localhost:5000/api/ai` to test the AI functionalities.

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.