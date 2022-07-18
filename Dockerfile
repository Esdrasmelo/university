FROM node:16.16-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY prisma/schema.prisma ./prisma/

RUN  npx prisma generate

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]