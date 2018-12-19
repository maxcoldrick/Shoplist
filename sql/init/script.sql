CREATE USER 'api'@'172.32.0.15' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON movies.* TO 'api'@'172.32.0.15';

CREATE TABLE IF NOT EXISTS twentyeighteen (
    movie_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (movie_id)
);

CREATE TABLE IF NOT EXISTS twentyseventeen (
    movie_id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    PRIMARY KEY (movie_id)
);

INSERT INTO twentyeighteen (title)
VALUES ('Aquaman');

INSERT INTO twentyseventeen (title)
VALUES ('Batman League');
