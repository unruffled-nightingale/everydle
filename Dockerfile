FROM node:18-alpine

WORKDIR /app
COPY . .

RUN yarn run build
RUN yarn global add serve
CMD ["serve", "-p", "80", "-s", "build"]