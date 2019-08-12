const login = (username, password) => {
    if (username == 'zhangsan' && password == '123') {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    login
}