import "reflect-metadata"
import { DataSource } from "typeorm"
import { Activity } from "./entity/Activity"
import { Todo } from "./entity/Todo"
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    synchronize: true,
    logging: true,
    entities: [Activity,Todo],
    migrations: [],
    subscribers: [],
})
