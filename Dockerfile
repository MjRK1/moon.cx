FROM node:20 AS build

WORKDIR /moon.cx

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm install -g serve

EXPOSE 8080

CMD ["npm", "run", "serve"]
