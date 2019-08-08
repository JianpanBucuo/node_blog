use myblog;

--  show tables;

-- insert into users(username, `password`, realname) values ('lisi', '123', '李四');

-- select * from users;
-- select id, username from users where username='zhangsan' or password='123';
-- select id, username from users where username='zhangsan' and password='123';
-- select id, username from users where username like '%lisi%'  ;

-- select * from users where password like '%1%' order by id desc ; 
-- update
 -- update users set realname='李四2' where username='lisi';
-- delete
-- delete from users where username = 'lisi4';
 
select * from users where state='1';

update users set state='0' where username='lisi';
 
