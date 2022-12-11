# Foundational Stage 
FROM node:19.2-alpine as build 

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

# From foundational stage let's provide the assets

FROM nginx:stable

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]