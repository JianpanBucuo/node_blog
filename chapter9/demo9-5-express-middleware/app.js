
const express = require('express');


//本次 http请求的实例
const app = express();

app.use((req, res, next) => {
    console.log('请求开始/。', req.method, req.url);
    next();
})
app.use((req, res,next) => {
  //假设在处理cookie
  req.cookie = {
    ab:"123"
  }
  next();
});

app.use((req, res, next) => {
  setTimeout(() => {
    req.body = {
      a:100,
      b:200
    }
    next();
  },100)
})

app.use('/api', (req, res, next) => {
  console.log('处理 api路由---------');
  next();
})

app.get('/api', (req, res, next) => {
  console.log('处理 get 路由');
  next();
})

app.post('/api', (req, res, next) => {
  console.log('处理 post 路由');
  next();
})

function loginCheck (req, res, next) {
    console.log('模拟登录成功');
 
    next();
}

app.get('/api/get-cookie', loginCheck,(req,res,next) => {
  console.log('get api get cookie');
  res.json({
    errNo:0,
    data:req.cookie
  })
})
app.post('/post-cookie',(req,res,next) => {
  res.json({
    error:0,
    data:req.body
  })
});
app.use((req, res, next)=> {
  console.log('404');
  res.json({
    error: -1,
    msg: 'Not Found'
  })
})
app.listen(3000,() => {
  console.log('server is running on server')
})