FROM node:10

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . /app

ENTRYPOINT [ "nodemon","app.js" ]

EXPOSE 3000