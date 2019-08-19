#### Stream

IO操作的性能瓶颈
IN OUT
IO包括 网络IO 和 文件IO

网络 输入 输出
文件 输入 输出

相比于 CPU计算和内存读写， IO的突出特点就是慢！ （读写文件 发送网络请求）

如何在有限的硬件资源下提高 IO的操作效率？

###stream 流
            节省硬件资源

接收 postData的写法是为了 节省网络IO  
 pipe 管道
    req.pipe(res)
    req 和 res 都具有 stream特性

    网络IO
    文件IO