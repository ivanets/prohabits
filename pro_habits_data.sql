INSERT INTO `activities` (`id`, `user_id`, `message`, `datetime`) VALUES
(5, 1, 'Just commited [1]', '2017-06-03 18:14:28');

INSERT INTO `commits` (`id`, `commit_type_id`, `name`, `description`, `day`) VALUES
(1, 2, 'Family Traditions', 'Think of a new tradition to start in the office that celebrates a win for the team. Next, get some coworkers advice and thoughts on the idea. Consider implementing the tradition after the next success.', 1),
(2, 2, 'Test day 2', 'Test day 2\r\nTest day 2', 2);

INSERT INTO `commit_types` (`id`, `name`) VALUES
(1, 'Meditation'),
(2, 'Family time');

INSERT INTO `journals` (`id`, `user_id`, `body`, `date`, `published`) VALUES
(3, 1, 'test', '2017-06-03 21:23:55', 1);

INSERT INTO `quotes` (`id`, `header`, `body`, `author`, `picture`) VALUES
(1, NULL, 'Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.', 'WINSTON CHURCHILL', '/assets/img/churchill_ph.png'),
(2, NULL, 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.', 'Albert Einstein', '/assets/img/churchill_ph.png');

INSERT INTO `users` (`id`, `sub`, `name`, `nickname`, `picture`, `gender`, `day`, `next_available`) VALUES
(1, 'facebook|1316595861709940', 'Eugene Ivanets', 'Eugene Ivanets', 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15965557_1179171075452420_5799016965248682507_n.jpg?oh=281f1e8ddfea3ebd17e7ec84ef4a919c&oe=59E65A0E', 'male', 3, '2017-06-04 00:00:00');

INSERT INTO `users_commits` (`user_id`, `commit_id`, `done`, `created_at`, `updated_at`) VALUES
(1, 1, 0, '2017-06-03 13:31:44', '2017-06-03 13:31:44');
