# Use the official Node.js image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install dependencies (npm install)
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the app 
RUN npm run build

# Expose the desired port 
EXPOSE 80

# Command to start the application
CMD ["npm", "start"]
