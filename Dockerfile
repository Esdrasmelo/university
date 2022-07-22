FROM node:16.16-alpine

WORKDIR /usr/src/app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

COPY package*.json yarn.lock ./

RUN yarn install

COPY prisma/schema.prisma ./prisma/

RUN  npx prisma generate

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]