


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
    
