# Use an official Node.js runtime
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose the correct port for Cloud Run
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
