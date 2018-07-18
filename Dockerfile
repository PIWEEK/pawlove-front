FROM node:carbon as buildimg
LABEL maintainer="Kaleidos hello@kaleidos.net"

WORKDIR /
COPY . /pawlove-front
WORKDIR /pawlove-front
RUN npm install
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=buildimg /pawlove-front/dist /pawlove-front
