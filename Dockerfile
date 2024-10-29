FROM node:18-slim

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

EXPOSE  80

CMD ["npm", "start"]