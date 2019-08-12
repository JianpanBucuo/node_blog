use myblog;

--  show tables;

-- insert into users(username, `password`, realname) values ('lisi', '123', '李四');
 
-- select id, username from users where username='zhangsan' or password='123';
-- select id, username from users where username='zhangsan' and password='123';
-- select id, username from users where username like '%lisi%'  ;

-- select * from users where password like '%1%' order by id desc ; 
-- update
 -- update users set realname='李四2' where username='lisi';
-- delete
-- delete from users where username = 'lisi4';
 
-- select * from users where state='1';
--  select * from users where state <> '0';
-- update users set state='1' where username='lisi'; -- 软删除（通过 state 控制状态 ）


-- insert into blogs(title, content, createtime, author) values ('标题2', '内容2', '1565315246040','gre');
-- select * from blogs where title like '%标题%';
 
 
-- select * from users;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'jinjian94530!@';