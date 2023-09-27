# Stage 1 - Build
FROM node:18 as build-deps
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . ./ 
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.25.2
RUN ls -la
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html/build

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 8080


CMD ["nginx", "-g", "daemon off;"]

#opt/homebrew/etc/nginx/nginx.conf