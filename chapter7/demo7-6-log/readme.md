###7-6 如何写日志

1. 创建 写入流
2. 当用户文件时， 通过写入流， 将访问信息 写入 access.log


###7-7 日志 拆分

1. 日志内容会慢慢积累， 放在一个文件中不好处理
2. 按时间划分 日志文件 如 2019-02-10.access.log 
3. 实现方式 - linux的 crontab命令， 即定时任务 （运维范畴）

###7-8 分析 日志

1. 如针对 access.log日志，分析 chrome 占比
2. 日志是按行存储的，一行就是一条日志
3. 使用 nodejs 的 readline (基于stream 效率高)

readline 可以按照 stream的方式 一行一行 读取 数据

### 7-9 readline 演示

通过readline的方式 逐行分析日志

### 7-10 总结

1. 日志对server端的重要性， 相当于 人的眼睛
2. nodejs IO 性能瓶颈， 使用 stream提高性能
3. readline 分析日志
4. crontab 拆分日志 （运维人员）
