import { Sequelize } from "sequelize-typescript";

export class Db {
    public static init() : Sequelize {
        return new Sequelize({
            dialect: "postgres",
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
            logging: false,
            models: []
    });
}};
