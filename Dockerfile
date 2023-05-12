FROM node:18.16.0

ENV APP_HOME /app 

RUN npm install

WORKDIR /app

COPY package.json yarn.lock ./

COPY . .

EXPOSE 3000

CMD [ "node","dist/main" ]