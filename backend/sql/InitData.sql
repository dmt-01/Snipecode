CREATE TABLE users (
  id_users SERIAL PRIMARY KEY,
  mdp VARCHAR(255) NOT NULL,
  pseudo VARCHAR(50),
  email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE entity_code (
  id_entity_code SERIAL PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  language_code VARCHAR(50) NOT NULL,
  tags VARCHAR(50),
  text_code VARCHAR(250) NOT NULL,
  code_visibility VARCHAR(50) NOT NULL,
  id_users INT NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users(id_users) ON DELETE CASCADE
);

CREATE TABLE comment (
  id_comment SERIAL PRIMARY KEY,
  text_comment VARCHAR(500),
  id_users INT NOT NULL,
  id_entity_code INT NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users(id_users) ON DELETE CASCADE,
  FOREIGN KEY (id_entity_code) REFERENCES entity_code(id_entity_code) ON DELETE CASCADE
);


CREATE TABLE token (
  id_token SERIAL PRIMARY KEY,
  dates TIMESTAMP NOT NULL,
  id_users INT NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users(id_users) ON DELETE CASCADE
);


CREATE TABLE likes (
  id_likes SERIAL PRIMARY KEY,
  likes INTEGER,
  id_users INT NOT NULL,
  id_entity_code INT NOT NULL,
  FOREIGN KEY (id_users) REFERENCES users(id_users) ON DELETE CASCADE,
  FOREIGN KEY (id_entity_code) REFERENCES entity_code(id_entity_code) ON DELETE CASCADE
);