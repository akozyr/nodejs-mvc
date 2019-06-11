FROM node:10

ARG exposed_port=8080
ENV EXPOSED_PORT=$exposed_port

ARG host=0.0.0.0
ENV HOST=$host

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g nodemon && npm install

COPY . .

EXPOSE $exposed_port

CMD [ "npm", "run", "dev" ]
