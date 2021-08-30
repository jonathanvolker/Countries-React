CREATE DATABASE countrybd;

    CREATE TABLE country(
        ID VARCHAR(255),
        countryName SERIAL PRIMARY KEY,
        flag VARCHAR(255),
        continent VARCHAR(255), 
        capital VARCHAR(255),
        subregion VARCHAR(255),
        area VARCHAR(255),
        poblacion VARCHAR(255)
    
    );
CREATE TABLE activity(
    ID VARCHAR(255) ,
     name VARCHAR(255) ,
    dificultad VARCHAR(255),
    duracion VARCHAR(255),
    temporada VARCHAR(255)
);