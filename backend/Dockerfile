FROM node:alpine as development


# Create app directory
WORKDIR /app/backend 

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

COPY . .


CMD ["node", "server.js"]