### 安全

1. sql注入： 窃取数据库内容
2. xss攻击： 窃取前端的 cookie内容
3. 密码加密： 保障用户信息安全 （重要！）

### 预防
1. server端攻击方式非常多，预防手段非常多
2. 通过 web server （nodejs）层面预防的
3. 有些攻击需要硬件和服务来支持 （需要 OP运维支持） 如 DDOS


#### sql注入 
    最原始，最简单的 攻击方式
    攻击方式： 输入一个 sql片段， 最终拼接成一段攻击代码
    预防： 使用 mysql的 escape函数处理输入内容即可

    利用 -- 注释
    案例：
    select username, realname from users
    where username ='zhangsan'; delete from users -- ' and password = '123';
    
    预防方法： 使用 mysql.escape方法， 对输入进来的 mysql语句 进行转义

####　XSS攻击
1. 攻击方式： 在页面展示内容中参杂js代码，以获取网页信息
    添加内容时 添加 <script>alert(document.cookie)</script>

预防方法： 转换生成js的特殊字符
   npm install xss --save 
   使用 xss 方法包裹 页面上传的字符串