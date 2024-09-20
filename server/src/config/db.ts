import { Sequelize } from "sequelize-typescript";
import 'dotenv/config'

console.log(__dirname)
export const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export default db