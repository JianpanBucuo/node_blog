const getList = (author, key) => {
    //返回格式正确的假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: '1565161391958',
            author:'张三',
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: '1565161397929',
            author:'李四',
        }
    ]
}

const getDetail = (id) => {
    return  {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: '1565161391958',
        author:'张三',
    }
}
module.exports = {
    getList,
    getDetail
}