###6-3 server端 noe 操作 cookie

1. 查看 cookie
2. 修改 cookie
3. 实现登录验证

流程

登录
通过使用 post请求里的 username password参数 访问数据库，有相应 用户时 在 res里设置 cookie

已登录验证
从 req里(req.header.cookie)里 获取cookie，解析后赋值给 req.cookie
访问接口时判断， req.cookie里是否存在 username