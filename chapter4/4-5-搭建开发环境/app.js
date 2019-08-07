const serverHandle = (req, res) => {
    res.setHeader('Content-type','application/json');
    const resData = {
        name: 'Nic',
        age: '29',
        env: process.env.NODE_ENV
    };
    res.end(
        JSON.stringify(resData)
    )

}
module.exports = serverHandle;
 