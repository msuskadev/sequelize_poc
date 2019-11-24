import { Db } from "./db/db";
import * as dotnev from "dotenv";
import { Sequelize } from "sequelize/types";

export class App {
    private db: Sequelize;

    constructor() {
        dotnev.config();
        this.db = Db.init();        
    }
}

const a = new App();