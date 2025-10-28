INSERT INTO users (password, pseudo, email)
VALUES
('azerty123', 'CodeMaster', 'codemaster@gmail.com'),
('jslover42', 'JSFan', 'jsfan@hotmail.com'),
('securepass', 'BugHunter', 'bughunter@yahoo.com'),
('rootadmin', 'DevQueen', 'devqueen@outlook.com'),
('1234pass', 'NoobCoder', 'noobcoder@gmail.com');

INSERT INTO snippet (title, language_snippet, tags, text_snippet, visibility)
VALUES
('Hello World JS', 'JavaScript', 'beginner,js', 'console.log("Hello World!");', 'public'),
('Connexion DB', 'SQL', 'database,beginner', 'SELECT * FROM users;', 'private'),
('Styles de base', 'CSS', 'frontend,style', 'body { margin: 0; padding: 0; }', 'public'),
('Boucle For', 'Python', 'loop,basic', 'for i in range(5): print(i)', 'public'),
('Fetch API', 'JavaScript', 'api,async', 'fetch(url).then(r => r.json())', 'private');

INSERT INTO token (dates, id_users)
VALUES
(NOW() - INTERVAL '1 day', 1),
(NOW() - INTERVAL '2 hours', 2),
(NOW(), 3),
(NOW() - INTERVAL '30 minutes', 4),
(NOW() - INTERVAL '5 days', 5);

INSERT INTO users_comment_snippet (id_users, id_snippet, comment)
VALUES
(1, 3, 'Très utile pour débuter !'),
(2, 1, 'Simple et efficace.'),
(3, 4, 'Bonne explication.'),
(4, 5, 'Top pour l’async !'),
(5, 2, 'Merci pour ce snippet SQL.');

INSERT INTO users_likes_snippet (id_users, id_snippet)
VALUES
(1, 1),
(1, 4),
(2, 3),
(3, 5),
(4, 1),
(5, 4);
