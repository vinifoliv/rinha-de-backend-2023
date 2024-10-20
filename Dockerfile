FROM node:20.17.0

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD node index.js