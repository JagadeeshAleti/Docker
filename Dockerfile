# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /aws-user-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon as dev dependency
RUN npm install -g nodemon 

# Copy the application code to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3456

# Command to run the application
CMD [ "npm", "start"]