# backend/Dockerfile

# 1. Use an official Node.js runtime as the base image
FROM node:18-alpine

# 2. Set the working directory in the container
WORKDIR /app/backend

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install application dependencies
RUN npm install

# 5. Copy the rest of the application source code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 5000

# 7. Define the command to run the application
CMD ["node", "server.js"]