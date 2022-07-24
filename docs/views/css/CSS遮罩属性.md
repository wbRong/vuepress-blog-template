---
title: CSS mask遮罩属性
date: 2022-06-02 10:25:15
tags:
  - CSS
categories:
 - CSS
---

::: tip
CSS 属性`mask`允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域
:::

<!-- more -->

+ mask-image：设置图片作为遮罩
+ mask-mode：设置遮罩图片的模式
  + 属性值：alpha
  + 属性值：luminance
  + 属性值：match-source


+ mask-repeat：设置遮罩图片的平铺
  + 属性值：repeat-x;
  + 属性值：repeat-y;
  + 属性值：repeat;
  + 属性值：no-repeat;
  + 属性值：space;
  + 属性值：round;

+ mask-position：设置遮罩图片的位置
  + 属性值：top;
  + 属性值：bottom;
  + 属性值：left;
  + 属性值：right;
  + 属性值：center;


+ mask-origin：设置遮罩图片的初始位置
  + 属性值：content-box;
  + 属性值：padding-box;
  + 属性值：border-box;
  + 属性值：fill-box;
  + 属性值：stroke-box;
  + 属性值：view-box;

+ mask-size：设置遮罩的大小
  + 属性值：contain 
  + 属性值：cover
+ mask-composite：设置多图片遮罩时，遮罩的合成展示效果
+ mask-clip

### 准备两张图片
![](/img/Snipaste_2022-06-02_05-31-08.png)

### 实现
`mask-image`属性作用于元素上的遮罩层图像
```scss
  .box{
    width: 260px;
    height: 230px;
    -webkit-mask-image: url(./img/icon.png);
    -webkit-mask-repeat: no-repeat;
    .inner{
      width: inherit;
      height:inherit;
      background: url(./img/React-bg.jpg) no-repeat;
    }
  }
      
```
```html
  <div class="box">
    <div class="inner"></div>
  </div>
```
### 遮罩效果
![](/img/Snipaste_2022-06-02_05-36-15.png)