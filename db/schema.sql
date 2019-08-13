DROP DATABASE IF EXISTS globalFP_db;
CREATE DATABASE globalFP_db;
USE globalFP_db;

CREATE TABLE footprints(
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    country VARCHAR (100) NOT NULL,
    unRegion VARCHAR (100) NOT NULL,
    year INTEGER NOT NULL,
    carbon VARCHAR (20) NOT NULL,
    perCapitaGDP VARCHAR (20) NOT NULL,
    populations INTEGER (50) NOT NULL
);

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

Select * FROM footprints;

CREATE TABLE RecentSearch (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    country VARCHAR (100) NOT NULL,
    carbon VARCHAR (20) NOT NULL
);

