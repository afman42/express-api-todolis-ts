FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine AS server
WORKDIR /app
COPY package* ./
ENV MYSQL_HOST=$MYSQL_HOST 
ENV MYSQL_USER=$MYSQL_USER 
ENV MYSQL_PASSWORD=$MYSQL_PASSWORD
ENV MYSQL_DBNAME=$MYSQL_DBNAME
ENV MYSQL_PORT=$MYSQL_PORT
RUN npm install --production
# COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 3030
CMD ["npm", "run","prod"]