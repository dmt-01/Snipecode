DROP TABLE IF EXISTS users_comment_snippet CASCADE;
DROP TABLE IF EXISTS users_likes_snippet CASCADE;
DROP TABLE IF EXISTS token CASCADE;
DROP TABLE IF EXISTS snippet CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
   id_users SERIAL PRIMARY KEY,
   password VARCHAR(100)  NOT NULL,
   pseudo VARCHAR(50) ,
   email VARCHAR(100)  NOT NULL UNIQUE
);

CREATE TABLE snippet(
   id_snippet SERIAL PRIMARY KEY,
   title VARCHAR(50)  NOT NULL,
   language_snippet VARCHAR(50)  NOT NULL,
   tags VARCHAR(50) ,
   text_snippet TEXT  NOT NULL,
   visibility VARCHAR(50)  NOT NULL 
);

CREATE TABLE token(
   id_token SERIAL PRIMARY KEY,
   dates TIMESTAMP NOT NULL,
   id_users INTEGER NOT NULL,
   FOREIGN KEY(id_users) REFERENCES users(id_users)
);

CREATE TABLE users_comment_snippet(
   id_users INTEGER,
   id_snippet INTEGER,
   comment VARCHAR(50) ,
   PRIMARY KEY(id_users, id_snippet),
   FOREIGN KEY(id_users) REFERENCES users(id_users),
   FOREIGN KEY(id_snippet) REFERENCES snippet(id_snippet)
);

CREATE TABLE users_likes_snippet(
   id_users INTEGER,
   id_snippet INTEGER,
   PRIMARY KEY(id_users, id_snippet),
   FOREIGN KEY(id_users) REFERENCES users(id_users),
   FOREIGN KEY(id_snippet) REFERENCES snippet(id_snippet)
);