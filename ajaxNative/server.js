let express = require('express')

// 本地当服务器

let app = express()

// 为了解析post请求的请求体
app.use(express.urlencoded({
    extended: true
}))

// 用于展示页面，暴露静态资源
// 打开localhost:3000/ajax_get.html可以看到对应的页面
app.use(express.static(__dirname + '/public'))

// 打开localhost:3000/ajax_get能看到下面的话
// 可以理解成服务器，只要对/ajax_get请求，则返回固定的一句话
app.get('/ajax_get', function (req, resp) {
    // 不管接收到什么数据，只要请求，就返回给客户端固定的一句话
    console.log("收到get请求，参数：", req.query);
    resp.send('Hello jingyao from express. Receive a get request in Native JS.');
})

// 服务器，响应对ajax_post的请求
app.post('/ajax_post', function (req, resp) {
    console.log("收到post请求，参数: ", req.body);
    resp.send("Receive a post requeset in Native JS.");
})

// 可以理解成客户端，监听服务端的3000端口
app.listen(3000, function (err) {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Hello jingyao.')
    }
})