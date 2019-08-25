let express = require('express');
let router = express.Router();

router.post('/login',(req, res, next) => {
    const {username, password} = req.body;
    res.json({
        error:0,
        data: [username,password]
    })
})
module.exports = router;