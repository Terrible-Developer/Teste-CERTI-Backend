#Development Stage
FROM node:16-alpine as develop-stage
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn global add nodemon
RUN yarn install
COPY . .

#Build Stage
FROM develop-stage as build-stage
RUN yarn build

#Production Stage
FROM nginx:1.23.2
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
