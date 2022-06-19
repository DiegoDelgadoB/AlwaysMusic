const { Pool } = require('pg');
const yargs = require('yargs');

const pool = new Pool({
    user: 'postgres',
    password: 'postgresql',
    host: 'localhost',
    database: 'alwaysmusic',
    port: 5432
});

// Función asíncrona para registrar un nuevo estudiante en la base de datos.

yarg.command("registrar", "Insertar registro de estudiante", {
    rut: {
        describe: 'Identificación única del estudiante',
        demand: true,
        alias: 'r'
    },
    nombre: {
        describe: ''
    }
})
