FROM node:latest

ENV TZ="America/Sao_Paulo"
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . /dt-twitt

WORKDIR /dt-twitt

RUN npm i
RUN npm install ejs@2.7.4 --save-dev

USER node

ENTRYPOINT ["node", "app.js"]
CMD ["node", "app.js"]

EXPOSE 32321