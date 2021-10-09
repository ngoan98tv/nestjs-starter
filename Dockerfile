FROM node:12-alpine as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM node:12-alpine

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./

ENV NODE_ENV=production
RUN npm install

EXPOSE 3000
CMD [ "node", "main.js" ]