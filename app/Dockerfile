Dockerfile # Use Node.js 22 (required by Wasp)
FROM node:22-alpine

# Install system dependencies
RUN apk add --no-cache curl bash

# Install Wasp
RUN curl -sSL https://get.wasp.sh/installer.sh | bash
ENV PATH="/root/.local/bin:$PATH"

# Set working directory
WORKDIR /app

# Copy all project files
COPY . .

# Debug: Verify files were copied
RUN echo "Files copied to container:" && ls -la && echo "Wasp files:" && find . -name "*.wasp" -type f

# Build the application
RUN wasp build

# Expose port
EXPOSE 3001

# Start command
CMD ["wasp", "start"]