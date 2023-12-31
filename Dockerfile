FROM node:lts-iron as deps
WORKDIR /portfolio-website
COPY . .
RUN npm install
