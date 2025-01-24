FROM node:20-alpine as build

ADD ./ app
WORKDIR /app

RUN npm i
RUN npm run build

#----------------------------------------------------------------
FROM nginx:alpine

COPY --from=build /app/dist /urs/share/nginx/html
ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80