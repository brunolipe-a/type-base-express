FROM node:lts

ENV FOLDER_NAME=.

WORKDIR /usr/app

COPY ${folder}/package*.json ./
RUN npm install

COPY ${folder} .

RUN npx tsc

EXPOSE 3333

CMD npm start
