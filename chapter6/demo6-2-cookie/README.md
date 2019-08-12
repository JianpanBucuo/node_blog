###6-2 cookie 介绍

1. 什么是 cookie
存储在浏览器的一段字符串 （最大 5kb）
跨域不共享
格式如 k1=v1;k2=v2;k3=v3;
每次发送http请求，会将请求域的cookie一起发送给server （请求的是 哪个域的接口，会将该域的cookie 传输过去）
server端可以修改 cookie值 并返回给 浏览器
浏览器通过js 修改 cookie （有限制， server端锁死）
2. javascript 操作cookie 浏览器中查看 cookie

3. server端操作 cookie 实现登录验证

