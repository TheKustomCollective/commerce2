FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/src ./src

# Copy environment variable template
COPY backend/.env.example .env

# Expose the application port
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]