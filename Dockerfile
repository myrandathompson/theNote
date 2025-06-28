
    
#     # ### ---------- BACKEND STAGE ----------
#     # FROM node:20 AS backend
    
#     # WORKDIR /app
    
#     # # Install backend dependencies
#     # COPY api/package.json api/package-lock ./api/
#     # RUN npm install
    
#     # # Copy backend source
#     # COPY api/ ./api/
    
#     # # Copy frontend build into backend's public folder
#     # COPY --from=frontend /app/frontend/build ./api/public
    
#     # # Set working directory to backend folder
#     # WORKDIR /api
    
#     # # Expose the backend port
#     # EXPOSE 5001

#     # ### ---------- FRONTEND STAGE ----------
#     # FROM node:20 AS frontend

#     # WORKDIR /app/frontend
        
#     #     # Install frontend dependencies
#     # COPY frontend/package.json frontend/package-lock.json ./
#     # RUN npm install
        
#     #     # Copy source and build
#     # WORKDIR /frontend
    
#     # # Install frontend dependencies
#     # COPY frontend/ .
    

#     # # Copy source and build
   
#     # RUN npm install
    

    
  
#     # # Run the server (now it will find index.js in /app/api)
#     # CMD ["npm", "start"]
    


#     # Stage 1: Build the React frontend
# FROM node:20 AS frontend-builder

# WORKDIR /app/frontend

# COPY frontend/package.json ./
# RUN npm install
# COPY frontend/ ./
# # RUN npm run build

# # Stage 2: Build the Express backend
# FROM node:18-alpine AS api-builder

# WORKDIR /app/api

# RUN npm install mysql
# COPY api/package.json ./
# RUN npm install
# COPY api/ ./

# # Stage 3: Combine frontend, backend, and MySQL
# FROM ubuntu:22.04

# # Install necessary packages for Node.js and MySQL
# RUN apt-get update && apt-get install -y \
#     curl \
#     gnupg \
#     # mysql-server \
#     && rm -rf /var/lib/apt/lists/*

# # Install Node.js
# RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get install -y nodejs

# # Copy built frontend
# COPY --from=frontend-builder /app/frontend/build /app/frontend/build

# # Copy backend files
# COPY --from=api-builder /app/api /app/api
# COPY . .
# WORKDIR /app/api

# # Expose ports for React (e.g., Nginx serving static files) and Express
# EXPOSE 80 3000

# # # Initialize MySQL and start services
# RUN service mysql start && \
#     mysql -e "CREATE DATABASE IF NOT EXISTS mydatabase;" && \
#     mysql -e "CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';" && \
#     mysql -e "GRANT ALL PRIVILEGES ON mydatabase.* TO 'myuser'@'localhost';" && \
#     mysql -e "FLUSH PRIVILEGES;"

# # # Start Express backend and potentially a web server for React
# # CMD npm start & \
# #     # Optional: Serve React static files with Nginx or similar
# #     # Nginx setup would be more complex and require a separate configuration file
# #     # For simplicity, you might serve React from Express or a simple http-server
# #     # npm install -g serve && serve -s /app/frontend/build -p 80
# #     wait


# CMD ["npm", "start"]



# ---------- Stage 1: Build React frontend ----------
   
    # ---------- Stage 2: Build and run Express backend ----------
    FROM node:20
    
    WORKDIR /app/api
    
    # Copy backend package files first, install dependencies
    COPY api/package.json api/package-lock.json ./
    RUN npm install
    
    # Copy backend source
    COPY . .
    
    # Copy built frontend into backend's public folder (if serving static files from Express)
    # COPY --from=frontend-builder /app/frontend/build ./public
    
    # Expose backend port
    EXPOSE 3000



    FROM node:20 AS frontend-builder

    WORKDIR /app/frontend
    
    COPY frontend/package.json frontend/package-lock.json ./
    RUN npm install
    
    COPY frontend/ ./
    RUN npm run build
    
    
    # Start Express server
    CMD ["npm", "start"]
    