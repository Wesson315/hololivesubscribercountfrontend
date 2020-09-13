FROM node:current-alpine3.11 as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
RUN npm run build --prod
FROM nginx:latest
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

