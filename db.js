const { Pool } = require("pg");
require("dotenv").config();

let db = null;

try {

    db = new Pool({
        connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@141.8.192.164:5432/${process.env.DB_NAME}`
    });

} catch(e) {
    console.log(e);
}

module.exports = db;