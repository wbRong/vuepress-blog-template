---
title: CSS选择器
tags:
  - CSS
categories:
  - CSS
date: 2022-06-08 11:31:23
---

::: tip
使用很长的选择器列表来定位具有相同样式规则的多个元素
:::

<!-- more -->

### 伪类选择器
#### :is
`:is()`CSS伪类函数将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用  
**注意：**许多浏览器通过一个更旧的、带前缀的伪类:any() 来支持这个功能，包括旧版本的 Chrome、Firefox 和 Safari

```css
:is(header, main, footer) p:hover {
  color: red;
}

/* 以上内容相当于以下内容 */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
}

/* 向后兼容的版本:-*-any() */
:-webkit-any(header, main, footer) p:hover {
  color: red;
}
:matches(header, main, footer) p:hover {
  color: red;
}
```

#### :not
CSS伪类 `:not()`用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为**反选伪类**

```html
<div class="text1"></div>
<div class="text1"></div>
<div class="text2"></div>
<div class="text3"></div>
```
```css
/* 选择所有类名不是(.text2)的元素 */
:not(.text2) {
  color: blue;
}
```

{% note warning %}
+ `:not() `伪类不能被嵌套，这意味着 `:not(:not(...))` 是无效的。
+ 由于伪元素不是简单的选择器，他们不能被当作 `:not()` 中的参数，形如 `:not(p::before) `这样的选择器将不会工作。
+ 可以利用这个伪类写一个完全没有用处的选择器。例如， `:not(*)` 匹配任何非元素的元素，因此，这个规则将永远不会被应用。
+ 可以利用这个伪类提高规则的优先级。例如， `#foo:not(#bar) `和 `#foo` 会匹配相同的元素，但是前者的优先级更高。
+ `:not(.foo) `将匹配任何非` .foo` 的元素，包括 `<html>` 和 `<body>`。
+ 这个选择器只会应用在一个元素上，无法用它来排除所有父元素。比如，` body :not(table) a` 依旧会应用到表格元素 `<table>` 内部的 `<a>` 上，因为 `<tr>`将会被` :not(table) `这部分选择器匹配。
{% endnote %}

#### :nth-child
`:nth-child()` 选择器，该选择器选取父元素的第 `N` 个子元素，与类型无关
- 选择列表中的偶数标签:nth-child(2n)
- 选择列表中的奇数标签 :nth-child(2n-1)
- 选择从第4个开始的，直到最后:nth-child(n+4)
- 选择第1个到第4个 :nth-child(-n+4)
- 结合使用，可以限制选择某一个范围，选择第4个到第8个 :nth-child(n+4):nth-child(-n+8)



### 属性选择器
- [attr]：该选择器选择包含 `attr` 属性的所有元素，不论 `attr` 的值为何。
- [class=val]：指定了属性名，并指定了**该属性的属性值**
- [class|=val] : 选择class属性的值是val或值以 val- 开头的元素
- [class^=val] : 选择class属性的值以val**开头的元素**
- [class$=val] : 选择class属性的值以val**结尾的元素**
- [class*=val] : 选择class属性的值中**包含子字符串**val的元素