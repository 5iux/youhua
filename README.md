# 淘宝天猫装修优化——油猴脚本

主要针对淘内后台优化，优化链接http缺失、一键居中、模块去除10像素间距等；店铺装修强制跳转至pc装修；装修后台增加新窗口打开，欢迎交流使用;
## 示例图
![https://github.com/5iux/youhua/blob/master/01.jpg?raw=true](https://github.com/5iux/youhua/blob/master/01.jpg?raw=true)

![https://github.com/5iux/youhua/blob/master/02.jpg?raw=true](https://github.com/5iux/youhua/blob/master/02.jpg?raw=true)

## 使用前
在店铺中需在店铺css模块中添加：

请勿重复添加，非前端人员忽略！
``` css
/*1920居中*/
.left465{ margin-left:-465px; width:1920px;}
/*去10像素模块间距*/
.up10{ margin-top: -10px;}
/*自定义间距*/
.h_jg{ width: 100%; clear: both; display: block;}

```


## 使用方法：
**1.安装油猴插件：   

>[安装软件](https://tampermonkey.net/)

>装修后台浏览器优先推荐chrome，或者火狐浏览器

>火狐浏览器无法直接装修操作，推荐我的文章 → [《使用火狐装修淘宝商家后台》](https://yyv.me/4748.html)

**2.安装脚本
>[点击安装脚本](https://cdn.jsdelivr.net/gh/5iux/youhua/youhua.user.js)
