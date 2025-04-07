# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the application's port (ensure it's the same as in index.js)
EXPOSE 3000

# Define the startup command
CMD ["npm", "start"]