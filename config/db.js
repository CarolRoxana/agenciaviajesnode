import { Sequelize } from "sequelize";
import  dorenv, { configDotenv }  from "dotenv";
configDotenv();

const db = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    },
    operatorsAliases: false 
});

export default db;

