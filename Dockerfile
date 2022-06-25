# Pull official base image
FROM node:13.12.0-alpine

# Set working directory
WORKDIR /app

# Add our .bin to the path environment variable
ENV PATH /app/node_modules/.bin:$PATH

# Install our app's dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Add our application itself
COPY . ./

# Start it up!
CMD ["npm", "start"]