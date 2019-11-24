import { Db } from "./db/db";
import * as dotnev from "dotenv";
import { Sequelize } from "sequelize/types";
import { Employee } from "./db/models/employee";

export class App {
    private db: Sequelize;

    constructor() {
        dotnev.config();
        this.db = Db.init();    
    }

    public async syncDb(): Promise<void> {
        await this.db.authenticate();
        await this.db.sync({force: true});   
    }
}

const a = new App();
//(async () => await a.syncDb())();

const ms = new Employee({
    firstName: "Mieczyslaw",
    lastName: "Suska",
    age: 35,
    email: "validemail@gmail.com"
});

ms.save().then(() => console.log("Suckes"));

const tk = new Employee({
    firstName: "Tomasz",
    lastName: "Kruk",
    age: 43,
    email: "kruqu@gmail.com"
});

tk.save().then(() => console.log("Sukcess 2"));

const az = new Employee({
    firstName: "Anna",
    lastName: "Zawasa",
    age: 43,
    email: "zawasa.uahoo@wp.pl"
});

az.save().then(() => console.log("Sukcess 3"))
