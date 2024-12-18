# Use Node.js for building and serving the app
FROM node:20 AS builder
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Serve the built app
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
