FROM nginx:stable
LABEL Name=kit Version=4.0.0

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get clean && \
    apt-get install -y curl gnupg2 nano sudo

RUN sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install nodejs && \
    npm install npm@latest -g

COPY default.conf /etc/nginx/conf.d/

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 80 8080
