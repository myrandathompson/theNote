
    
    ### ---------- BACKEND STAGE ----------
        FROM node:20 AS backend
    
        WORKDIR /app/backend
        
        # Install backend dependencies
        COPY api/package.json api/package-lock ./api/
        RUN npm install
        
        # Copy backend source
        COPY backend/ ./backend/
        
        # Copy frontend build into backend's public folder
        COPY --from=frontend /app/frontend/build ./api/public
        
        # Set working directory to backend folder
        WORKDIR /backend
        
        # Expose the backend port
        EXPOSE 5001
    
        ### ---------- FRONTEND STAGE ----------
        FROM node:20 AS frontend
    
        WORKDIR /app/frontend
            
            # Install frontend dependencies
        COPY frontend/package.json frontend/package-lock.json ./
        RUN npm install
            
            # Copy source and build
        WORKDIR /frontend
        
        # Install frontend dependencies
        COPY frontend/ .
        
    
        # Copy source and build
       
        RUN npm install
        
    
        
      
        # Run the server (now it will find index.js in /app/api)
        CMD ["npm", "start"]
        