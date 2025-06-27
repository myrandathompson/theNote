
    
    ### ---------- BACKEND STAGE ----------
    FROM node:20 AS backend
    
    WORKDIR /app
    
    # Install backend dependencies
    COPY api/package.json api/package-lock.json  ./api/
    RUN npm install
    
    # Copy backend source
    COPY api/ ./api/
    
    # Copy frontend build into backend's public folder
    COPY --from=frontend /app/frontend/build ./api/public
    
    # Set working directory to backend folder
    WORKDIR /api
    
    # Expose the backend port
    EXPOSE 5001

    ### ---------- FRONTEND STAGE ----------
    FROM node:20 AS frontend

    WORKDIR /app/frontend
        
        # Install frontend dependencies
    COPY frontend/package.json frontend/package-lock.json ./

    RUN npm install
        
    

    

    
  
    # Run the server (now it will find index.js in /app/api)
    CMD ["npm", "start"]
    
