FROM node:16-alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Serve Application using Nginx Server

FROM nginx:alpine

COPY --from=build /app/dist/y-nkap-frontend/ /usr/share/nginx/html

EXPOSE 80