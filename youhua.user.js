// ==UserScript==
// @icon         https://www.taobao.com/favicon.ico
// @name         韩都淘内优化连接
// @namespace    https://5iux.github.io/youhua
// @version      2020.11.12
// @description  本脚本主要针对淘内后台优化，增加快捷方式、优化链接http缺失、一键居中、模块去除10像素间距等；装修后台增加新窗口打开，欢迎交流使用;
// @author       D.Young
// @match        *://siteadmin.tmall.com/module*
// @match        *://mai.taobao.com/seller_admin.htm*
// @match        *://siteadmin.taobao.com/module*
// @match        *://siteadmin.tmall.com/design.htm*
// @match        *://myseller.taobao.com/home.htm*
// @match        *://siteadmin.tmall.com/page/pageManager.htm*
// @match        *://siteadmin.taobao.com/design.htm*
// @match        *://siteadmin.tmall.com/preview.htm*
// @match        *://siteadmin.taobao.com/preview.htm*
// @match        *://login.taobao.com/member/login.jhtml*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/gh/5iux/youhua@master/youhua.js?t=20200427
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    //按钮样式
    GM_addStyle('.yy_yh1124 { width: 400px; text-align: center; font-family: Arial, "Microsoft Yahei"; position: absolute; z-index: 1000000000; right: 20px; height: 26px; color: #fff; line-height: 26px; }\
.yy_btn { width: auto; height: 26px; padding: 0 10px; float: right; cursor: pointer; border-radius: 15px; background: #0074ff; margin-left: 5px; }\
.yy_btn a{color: #fff; }\
.yy_btn:hover { background: #333; }\
.yy_btn:active { background: #f03; }');
    //消息弹窗
    GM_addStyle('.yy_message { width: 200px; height: 150px; background: #eee; border: 10px solid #09F; font-family: Arial, "Microsoft YaHei"; font-size: 14px; color: #000; text-align: left; z-index: 1000000000000; box-shadow: 0 0 300px #333; position: fixed; left: 50%; margin-left: -110px; top: 50%; margin-top: -85px; }\
.yy_message .yy_cl { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #06F; width: 40px; height: 40px; position: absolute; z-index: 10; right: -50px; top: -10px; cursor: pointer; }\
.yy_message .yy_cl:active { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #F63; }\
.yy_message .yy_tile { width: 100%; height: 30px; line-height: 30px; background: #06F; text-align: center; color: #fff; font-size: 14px; float: left; }\
.yy_message .yy_input { width: 100%; height: 30px; margin-top: 30px; float: left; }\
.yy_message .yy_input input { width: 90%; display: block; margin: 0 auto; height: 30px; outline: none; text-indent: 10px; padding: 0; text-align: left; border: 1px solid #09F; }\
.yy_message .yy_button { width: 120px; height: 30px; float: left; margin: 20px 0 0 40px; text-align: center; height: 26px; line-height: 26px; background: #F63; color: #fff; border-radius: 13px; cursor: pointer; border: none; padding: 0; outline: none; }\
.yy_message .yy_button:active { background: #F30; }');
    //消息弹窗2
    GM_addStyle('.yy_msg { width: 200px; height:240px; background: #eee; border: 10px solid #09F; font-family: Arial, "Microsoft YaHei"; font-size: 14px; color: #000; text-align: left; z-index: 1000000000000; box-shadow: 0 0 300px #333; position: fixed; left:0; right:0; bottom: 0; top:0; margin:auto; }\
.yy_msg .yy_cl { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #06F; width: 40px; height: 40px; position: absolute; z-index: 10; right: -50px; top: -10px; cursor: pointer; }\
.yy_msg .yy_cl:active { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #F63; }\
.yy_msg .yy_tile { width: 100%; height: 30px; line-height: 30px; background: #06F; text-align: center; color: #fff; font-size: 14px; float: left; }\
.yy_msg .yy_input { width: 100%;margin-top: 10px; float: left; }\
.yy_msg .yy_input input { width: 90%; display: block; margin: 0 auto; height: 30px; outline: none; text-indent: 10px; padding: 0; text-align: left; border: 1px solid #09F; }\
.yy_msg .yy_input span { width: 90%; display: block; margin: 0 auto; height:30px; line-height: 30px;  text-indent: 10px; text-align: left; font-size: 12px; color: #000;}\
.yy_msg .yy_button { width: 120px; height: 30px; float: left; margin: 20px 0 0 40px; text-align: center; height: 26px; line-height: 26px; background: #F63; color: #fff; border-radius: 13px; cursor: pointer; border: none; padding: 0; outline: none; }\
.yy_msg .yy_button:active { background: #F30; }\
.yy_msg i{ clear: both; display: block; width: 100%; height:10px; }');
    //超级css编辑器
    GM_addStyle('.yycopy{ width: 80px !important; }\
 .vl-sidebar .toolbar .css-slide .J_CSSText.csstext { width: 100%; }');
    //千牛二维码
    GM_addStyle('#J-qrcode-wrap{ display:none !important}\
#vl-preview-top{ position: absolute !important; }\
#J_MUIMallbar{display:none !important}\
.tshop-psm-shop-ww-hover{display:none !important}\
#HUABAN_WIDGETS{display:none !important }\
.bluegirl{ display: none; }\
.aw-wrapper{ display: none !important; }');
    //装修直达
    GM_addStyle('.zxbtn{height:80px;}');
    //优化编辑器样式cdn
    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "https://cdn.jsdelivr.net/gh/5iux/youhua@master/editor-min.css");
    var heads = doc.getElementsByTagName("head");
    doc.documentElement.appendChild(link);
})();