### 5-1 MySql介绍

1. mysql 介绍 安装 和 使用
2. nodejs 连接 mysql
3. API 连接 mysql

为何使用 mysql 而不是 mogondb

1. mysql是企业内最常用的存储工具， 一般都有专人运维
2. 社区内最常用的存储工具， 有问题随时可查
3. mysql本身是一个复杂的数据库软件，本课只讲基本使用


webserver中最流行的关系型数据库
轻量级， 易学易用
下载
https://dev.mysql.com/downloads/mysql/

root 用户名 密码 记住密码

mysql workbench
mysql的客户端，可视化操作
https://dev.mysql.com/downloads/workbench/

showdatabases


建库


建表
    存储用户
            id username password realname
            1  zhangsan 123      张三
            2  lisi     123      李四

    存储博客
            id title  content createTime author
            1 标题1    内容1   ...        zhangsan


表操作 (nodejs 连接 数据库)
    增删改查
    使用 sql语句 
jinjian94530!@

SET SQL_SAFE_UPDATES = 0; 可以更新
