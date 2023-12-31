FROM node:lts-iron as deps
WORKDIR /src
COPY . .
RUN npm install
