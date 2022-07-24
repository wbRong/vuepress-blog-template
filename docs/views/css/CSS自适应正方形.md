---
title: CSS自适应正方形
tags:
  - CSS
categories:
  - CSS
date: 2022-06-08 13:15:08
---

::: tip
随窗口大小宽度变化
:::
<!-- more -->

结构
```html
<div class="box"></div>
```

### padding
设置垂直方向的padding  
在盒模型中，`margin、padding`的百分比数值是相对于父元素的宽度计算的，所以将`padding`值设为与`width`值相同的百分比
```css
.box{ width:50%; height:0; padding-bottom:50%; background-color:red; }
```

### vw
CSS3中新增的相对于可视区域百分比的长度单位
```css
.box{ width:50vw; height:50vw; background-color:red; }
```

### aspect-ratio
`aspect-ratio`  CSS 属性为 box 容器规定了一个期待的纵横比，这个纵横比可以`用来计算自动尺寸`以及为其它布局函数服务。
```css
.box{ background-color: red; aspect-ratio: 1/1; color: #fff; }
```