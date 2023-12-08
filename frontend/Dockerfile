# Use an official Node.js runtime as the base image
FROM node:alpine AS development

# Create app directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Command to start the application development server
CMD ["npm", "run", "dev"]