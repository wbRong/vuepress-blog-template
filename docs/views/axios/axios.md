---
title: Axios易用简洁且高效的http库
date: 2022-06-08 15:14:50
tags:
  - Axios
categories:
  - Axios
---

::: tip
基于promise可以用于浏览器和node.js的网络请求库
:::
<!-- more -->

### Axios?
Axios 是一个基于 `promise` 网络请求库，作用于`node.js` 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 `XMLHttpRequests`。
- [axios文档1](http://www.axios-js.com/)
- [axios文档2](https://axios-http.com/zh/docs/intro)


### 安装
``` sh
npm install axios
# or
yarn add axios
# or
bower install axios

```
使用 cdn:
```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### 案例
基于vue
`src/api/request.js`
```javascript
import axios from 'axios';

// 自定义配置新建一个实例
const instance = axios.create({
  baseURL: 'http://kun******.net/',
  timeout: 3000, //超时时长
  // headers: {'X-Custom-Header': 'foobar'} //响应头
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token');
  if(token){
    config.headers= {
      'tokens':token
    }
  }
  return config;
},  (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  return response;
},  (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  return Promise.reject(error);
});

export default instance;
```

`src/api/index.js`
```javascript
import request from './request';

// 列表
export const sendGetList = () => request.get('/index/list');
// 登录
export const sendPostLogin = (params) => request.post('/auth/loginWeb',params);
```

`src/page/demo.vue`
```javascript
<template>
  <div>
    <button @click="sendGetFn">axios请求get</button><br/>
    <button @click="sendPostFn">axios请求post</button>
  </div>
</template>

<script>
// import axios from 'axios';
import {sendGetList,sendPostLogin} from './api';

export default {
  methods:{
    sendGetFn(){
      // axios.get('http://kun******.net/index/list').then(res=>{
      //   console.log(res.data);
      // })
      sendGetList().then(res=>{
        console.log("output:",res.data)
      })
    },
    sendPostFn(){
      // axios.post('http://kun******.net/auth/loginWeb',
      // {
      //   username:'admin',
      //   pwd:'123456'
      //   }).then(res=>{
      //   console.log(res);
      // })
      sendPostLogin({username:'admin',pwd:'123456'}).then(res=>{
        console.log("output:",res)
      })
    },
  }
}
</script>

<style scoped lang="scss"></style>

```