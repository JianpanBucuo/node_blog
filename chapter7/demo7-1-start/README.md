### 7-1  日志

####原理 和 使用

1. 系统没有日志 就等于 人没有眼睛  --- 抓瞎
    (1). 访问日志 acess.log 
            请求类型 请求路径 时间  useragent 统计浏览器系统
    (2). 自定义日志 业务上的日志 (自定义事件， 错误记录)

2. 日志存储到文件中    nodejs 文件操作， nodejs stream(流)
3. 日志功能开发和使用
4. 日志文件拆分， 日志内容分析 



#### 疑问 为什么不存储在 mysql redis中 ？
    T
日志文件非常大 (redis 内存数据库)
写文件是 异步操作(慢一点没关系)

mysql(适用于 表结构联动查询)