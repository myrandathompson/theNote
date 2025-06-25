
    
    ### ---------- BACKEND STAGE ----------
    FROM node:20 AS backend
    
    WORKDIR /app
    
    # Install backend dependencies
    COPY api/package.json api/yarn.lock ./api/
    RUN cd api && yarn install
    
    # Copy backend source
    COPY api/ ./api/
    
    # Copy frontend build into backend's public folder
    COPY --from=frontend /app/frontend/build ./api/public
    
    # Set working directory to backend folder
    WORKDIR /app/api
    
    # Expose the backend port
    EXPOSE 5001
### ---------- FRONTEND STAGE ----------
    FROM node:20 AS frontend

    WORKDIR /app/frontend
    
    # Install frontend dependencies
   
    RUN yarn install
    COPY frontend/package.json frontend/yarn.lock ./
    # Copy source and build
    COPY frontend/ .
  
    

    
  
    # Run the server (now it will find index.js in /app/api)
    CMD ["yarn", "start"]
    