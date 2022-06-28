
const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'Patricia',
    host: 'localhost',
    database: 'prueba',
    password: 'p470p470',
    port: 5432,
});

module.exports = pool;

