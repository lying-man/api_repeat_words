const { Pool } = require("pg");

let db = null;

try {

    db = new Pool({
        connectionString: "postgres://fgtmqmug:lBjdCD8OI8EVon9ozLFQk0wTt1ux1amk@cornelius.db.elephantsql.com/fgtmqmug",
        ssl: true
    });

} catch(e) {
    console.log(e);
}

module.exports = db;