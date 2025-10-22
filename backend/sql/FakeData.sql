-- 20 users
INSERT INTO users (MDP, pseudo, Email) VALUES
('hash1', 'User1', 'user1@mail.com'),
('hash2', 'User2', 'user2@mail.com'),
('hash3', 'User3', 'user3@mail.com'),
('hash4', 'User4', 'user4@mail.com'),
('hash5', 'User5', 'user5@mail.com'),
('hash6', 'User6', 'user6@mail.com'),
('hash7', 'User7', 'user7@mail.com'),
('hash8', 'User8', 'user8@mail.com'),
('hash9', 'User9', 'user9@mail.com'),
('hash10', 'User10', 'user10@mail.com'),
('hash11', 'User11', 'user11@mail.com'),
('hash12', 'User12', 'user12@mail.com'),
('hash13', 'User13', 'user13@mail.com'),
('hash14', 'User14', 'user14@mail.com'),
('hash15', 'User15', 'user15@mail.com'),
('hash16', 'User16', 'user16@mail.com'),
('hash17', 'User17', 'user17@mail.com'),
('hash18', 'User18', 'user18@mail.com'),
('hash19', 'User19', 'user19@mail.com'),
('hash20', 'User20', 'user20@mail.com');

-- 20 entity_code
INSERT INTO entity_code (title, language_code, tags, text_code, code_visibility, id_users) VALUES
('Hello World JS', 'JavaScript', 'intro,basics', 'console.log("Hello World");', 'public', 1),
('FizzBuzz', 'Python', 'loop,basics', 'for i in range(1,101): print(i)', 'public', 2),
('Factorial', 'C', 'math,recursion', 'int fact(int n){...}', 'private', 3),
('Todo App', 'TypeScript', 'frontend', 'function addTask(){}', 'public', 4),
('SQL Join Example', 'SQL', 'database,join', 'SELECT * FROM A JOIN B;', 'public', 5),
('React Counter', 'JavaScript', 'react,hooks', 'useState(0);', 'private', 6),
('Node Server', 'JavaScript', 'backend,express', 'app.listen(3000);', 'public', 7),
('HTML Boilerplate', 'HTML', 'frontend', '<!DOCTYPE html>', 'public', 8),
('CSS Flexbox', 'CSS', 'style,layout', 'display:flex;', 'public', 9),
('Game Loop', 'C++', 'game,loop', 'while(running){...}', 'private', 10),
('Random Password', 'Python', 'security', 'import random', 'public', 11),
('Weather API', 'JavaScript', 'api,fetch', 'fetch(weatherURL)', 'public', 12),
('Login Form', 'HTML', 'form,frontend', '<form>...</form>', 'public', 13),
('Sorting', 'Java', 'algorithm', 'Arrays.sort()', 'private', 14),
('Email Validator', 'PHP', 'regex', '$valid = preg_match(...)', 'public', 15),
('Responsive Nav', 'CSS', 'layout', '@media...', 'public', 16),
('Calendar App', 'React', 'frontend,app', 'useEffect()', 'private', 17),
('SQL Triggers', 'SQL', 'advanced', 'CREATE TRIGGER...', 'public', 18),
('REST API', 'Node.js', 'backend', 'app.get(...)', 'public', 19),
('Image Gallery', 'Vue', 'frontend', 'v-for="img in imgs"', 'private', 20);

-- 20 comments
INSERT INTO comment (text_comment, id_users, id_entity_code) VALUES
('Super code !', 1, 1),
('J’ai appris plein de trucs', 2, 3),
('Bonne idée !', 3, 2),
('Merci pour le partage', 4, 4),
('Code propre et clair', 5, 5),
('Je vais le réutiliser', 6, 6),
('Trop cool !', 7, 7),
('Je n’y avais pas pensé', 8, 8),
('Beau travail', 9, 9),
('GG !', 10, 10),
('Fonctionne nickel', 11, 11),
('Bug corrigé merci', 12, 12),
('Très utile', 13, 13),
('Merci !', 14, 14),
('Bonne structure', 15, 15),
('Complet', 16, 16),
('Excellent tuto', 17, 17),
('J’adore !', 18, 18),
('Bravo', 19, 19),
('Bien joué', 20, 20);

-- 20 tokens
INSERT INTO token (dates, id_users) VALUES
(NOW(), 1), (NOW(), 2), (NOW(), 3), (NOW(), 4), (NOW(), 5),
(NOW(), 6), (NOW(), 7), (NOW(), 8), (NOW(), 9), (NOW(), 10),
(NOW(), 11), (NOW(), 12), (NOW(), 13), (NOW(), 14), (NOW(), 15),
(NOW(), 16), (NOW(), 17), (NOW(), 18), (NOW(), 19), (NOW(), 20);

-- 20 likes
INSERT INTO likes (likes, id_users, id_entity_code) VALUES
(5, 1, 1),
(2, 2, 2),
(10, 3, 3),
(0, 4, 4),
(7, 5, 5);