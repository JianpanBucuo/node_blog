###5-4-nodejs-操作数据库
 
 
 封装为系统可用的工具
 让api直接操作数据库， 不再使用假数据


<!-- 修改密码 -->
 ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; (修改加密规则 （必写）)ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; (更新用户密码 )FLUSH PRIVILEGES; #刷新权限（不输入也可以）
https://www.jianshu.com/p/c8eb6d2471f8
 