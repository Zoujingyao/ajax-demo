# ajax-demo

Ajax即Asynchronous JavaScript and XML，意思就是用JavaScript执行异步网络请求；可以实现局部刷新页面的目的；而不是一个HTTP请求刷新一次整个页面。
Ajax在浏览器中向服务端发送异步请求；是专门用来前后端交互的，可以无刷新获取数据，获取到后端返回的值后展示在前端。

主要记录Ajax的用法并给出demo，适合了解和回忆Ajax的用法。

## 原生JS发Ajax请求
面试高频考点，主要分为四步：
```js
// 1. 实例化XMLHTTPRequest对象
let xhr = new XMLHttpRequest();

// 2. 监听状态变化
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
    }
}

// 3. 通过open方法指定发送请求的方法、请求的服务端地址
xhr.open(method, url);

// 4. 发送请求
xhr.send();
```
这一部分示例代码位于ajaxNative目录下：
1. 运行server.js
2. 浏览器打开网址"http://localhost:3000/ajax.html"