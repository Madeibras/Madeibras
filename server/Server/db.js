import mysql from 'mysql2'

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "252525",
    database: "db_produtos"
})

export default db