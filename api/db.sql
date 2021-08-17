CREATE DATABASE countries;

CREATE TABLE country(
    country_id SERIAL PRIMARY KEY,
    countryName VARCHAR(255) NOT NULL,
    flag VARCHAR(255),
    continent VARCHAR(255), 
    capital VARCHAR(255),
    subregion VARCHAR(255),
    area VARCHAR(255),
    poblacion VARCHAR(255)
 
);
CREATE TABLE activity(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dificultad VARCHAR(255),
    duracion VARCHAR(255),
    temporada VARCHAR(255)
)