CREATE DATABASE countrybd;

CREATE TABLE country(
     
    ID SERIAL PRIMARY KEY,
    countryName VARCHAR(255) NOT NULL,
    flag VARCHAR(255),
    continent VARCHAR(255), 
    capital VARCHAR(255),
    subregion VARCHAR(255),
    area VARCHAR(255),
    poblacion VARCHAR(255)
 
);
CREATE TABLE activity(
    ID SERIAL PRIMARY KEY,
     name VARCHAR(255) ,
    dificultad VARCHAR(255),
    duracion VARCHAR(255),
    temporada VARCHAR(255)
);