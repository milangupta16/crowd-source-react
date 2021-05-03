FROM node:13.12.0-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install crowd-source-react -g --silent

COPY . .
EXPOSE 8085
CMD ["npm", "start"]