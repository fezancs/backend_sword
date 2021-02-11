FROM node:12.2.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start --host 0.0.0.0
