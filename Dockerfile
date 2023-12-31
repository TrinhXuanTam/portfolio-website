FROM node:lts-iron as deps
WORKDIR /src
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm install