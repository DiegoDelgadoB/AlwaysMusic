CREATE DATABASE always_music;
\c always_music;

CREATE TABLE estudiantes(
    Nombre VARCHAR(50) NOT NULL,
    Rut VARCHAR(20) PRIMARY KEY,
    Curso VARCHAR(20) NOT NULL,
    Nivel int not null
);

