let express = require('express');
let router = express.Router();

router.get('/list',(req, res, next) => {
    res.json({
        error:0,
        data: [1,2,3]
    })
})
module.exports = router;