FROM node:16.16

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn install
RUN yarn prisma migrate reset -f

EXPOSE 4000

CMD ["yarn", "start"]