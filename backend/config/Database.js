import { Sequelize } from "sequelize";
const db = new Sequelize('auth_db', 'root', 'toor', {
    host: "localhost",
    dialect: "mysql"
});

export default db;