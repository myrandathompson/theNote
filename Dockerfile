


# Build frontend
FROM node:20 AS frontend-builder

WORKDIR /app/frontend

# Install frontend dependencies first (for better caching)
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy and build frontend source
COPY frontend/ ./
RUN npm run build

# Build backend
FROM node:20 AS backend

WORKDIR /app/backend

# Install backend dependencies first (for better caching)
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Copy backend source
COPY backend/ ./

# Copy built frontend assets from previous stage into backend's public folder
COPY --from=frontend-builder /app/frontend/build ./public

# Expose API port
EXPOSE 3000

# Run Express server
CMD ["npm", "start"]