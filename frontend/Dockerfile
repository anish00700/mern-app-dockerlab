# frontend/Dockerfile

# --- Stage 1: Build the React application ---
    FROM node:18-alpine AS build

    WORKDIR /app
    
    # Copy package files and install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy the rest of the application source code
    COPY . .
    
    # Build the application
    RUN npm run build
    
    # --- Stage 2: Serve the application using Nginx ---
    FROM nginx:stable-alpine
    
    # Copy the build output from the 'build' stage
    COPY --from=build /app/build /usr/share/nginx/html
    
    # Expose port 80
    EXPOSE 80
    
    # Start Nginx and serve the static files
    CMD ["nginx", "-g", "daemon off;"]