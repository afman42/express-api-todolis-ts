# Backend Test

## Run Docker
`docker run -it -e MYSQL_HOST=172.17.0.2 -e MYSQL_USER=root -e MYSQL_PASSWORD=test -e MYSQL_DBNAME=db_todolist -e MYSQL_PORT=3306 -dp 3030:3030 armandos42/adonisjs-api-todolist:v6`

## Build 
`docker build -t adonisjs-todolist .`

## DOCKER MARIADB
`docker run -e MARIADB_ROOT_PASSWORD=test -d -p 3307:3306 mariadb:latest`