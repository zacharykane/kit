FROM node:8
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
EXPOSE 8080
ENTRYPOINT ["npm", "run"]
