
    FROM node:20
    
    WORKDIR /app/backend
    
    # Copy backend package files first, install dependencies
    COPY routes/api/package.json routes/api/package-lock.json ./
    RUN npm install
    
    # Copy backend source
    COPY . .
    
    # Copy built frontend into backend's public folder (if serving static files from Express)
    # COPY --from=frontend-builder /app/frontend/build ./public
    RUN npm run build
    # Expose backend port
    EXPOSE 3000



    FROM node:20 AS frontend-builder

    WORKDIR /app/frontend
    
    COPY frontend/package.json frontend/package-lock.json ./
    
    copy . .
    
    RUN npm install
    
   
   
    
   
   
   
    
    
    
    # Start Express server
    CMD ["npm", "start"]
    

