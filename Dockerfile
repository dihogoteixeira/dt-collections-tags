FROM node:latest

ENV TZ="America/Sao_Paulo"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /twitter-connect

WORKDIR /twitter-connect

RUN npm install -g

CMD [ "node", "app.js" ]

EXPOSE 3000