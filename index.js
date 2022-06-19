const { Pool } = require('pg');
const yargs = require('yargs');

const pool = new Pool({
    user: 'postgres',
    password: 'postgresql',
    host: 'localhost',
    database: 'alwaysmusic',
    port: 5432
});

