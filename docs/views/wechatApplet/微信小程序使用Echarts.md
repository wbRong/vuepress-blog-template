---
title: 微信小程序使用Echarts
tags:
  - 小程序
categories:
 - 小程序
index_img: >-
  /img/echarts.jpg
abbrlink: c39f
date: 2022-04-12 11:15:00
---

> 开发者可以通过熟悉的 `ECharts` 配置方式，快速开发图表，满足各种可视化需求
<!-- more -->


#### 介绍
  - [Echarts官网](https://echarts.apache.org/zh/index.html)
  - [Echarts图表示例](https://echarts.apache.org/examples/zh/index.html)
  - [微信公众平台官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/)

#### 步骤
首先，下载 GitHub 上的[ecomfe/echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目,将 `ec-canvas`文件夹 复制到项目根目录下。  
注：也可访问我的[Gitee仓库](https://gitee.com/wbRong/ec-canvas)进行下载 
![](/img/github_1.3tyqjv1tncc0.webp)
根目录
![](/img/github_2.73obzfn64bg0.webp)

复制成功，需要修改`pages/index`文件夹下wxml、json、js和wxss实现图表展示  

##### 修改index.json
引入`ec-canvas`组件，内容如下
```json
{
  "usingComponents": {
    "ec-canvas": "../../ec-canvas/ec-canvas"
  }
}
```

##### 修改index.wxml
创建 \<ec-canvas\> 组件
```wxml
<view class="container">
  <ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>
</view>
```

##### 修改index.wxss
`ec-canvas`组件指定样式
```wxss
.echarts{
  width:750rpx;
  height:750rpx;
  margin:50px auto 0;
}
```

##### 修改index.js
```javascript
import * as echarts from '../../ec-canvas/echarts';
let chart = null, option;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart);
  option = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
        { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
        { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  chart.setOption(option);
  return chart;
};

Page({
  data: {
    ec: {
      onInit: initChart
    }
  }
});

```
显示的Echarts图表示例，可以去[Echarts官网](https://echarts.apache.org/examples/zh/index.html)查阅。  

##### 最终效果
![](/img/github_3.1qiwisawjh40.webp)