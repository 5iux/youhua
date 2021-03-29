// ==UserScript==
// @name         在豆瓣搜索直达
// @namespace    https://syys.ml/
// @version      0.0.1
// @description:zh-CN 在豆瓣电影页面标题处显示搜索页的直达按钮
// @author       D.Young
// @match        *://movie.douban.com/subject/*
// @description D.Young
// ==/UserScript==

(function () {
    var host = location.hostname;
    if (host === 'movie.douban.com') {
        const title = document.querySelector('title').innerText.replace(/(^\s*)|(\s*$)/g, '').replace(' (豆瓣)', '');
        const subjectwrap = document.querySelector('h1');
        const subject = document.querySelector('.year');
        if (!subjectwrap || !subject) {
            return;
        }
        const sectl = document.createElement('span');
        subjectwrap.insertBefore(sectl, subject.nextSibling);
        sectl.insertAdjacentHTML('beforebegin',
`<style>.syys_ml{vertical-align: middle;}.syys_ml:hover{background: #fff!important;}</style>
<a href="https://syys.ml/search.php?v=${title}" class="syys_ml" target="_blank">
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 25.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 105.8 24" style="enable-background:new 0 0 105.8 24;" height="24" xml:space="preserve">
<style type="text/css">
    .st0{fill:#273149;}
    .st1{fill:#F24866;}
</style>
<path class="st0" d="M14.5,1.3c5.9,0,10.7,4.8,10.7,10.7s-4.8,10.7-10.7,10.7S3.8,17.9,3.8,12S8.6,1.3,14.5,1.3z M14.5,3.5
    c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5S23,16.7,23,12S19.2,3.5,14.5,3.5z"/>
<path class="st1" d="M11.6,6.3l2.3,1.4v5.9l2.5-1.6L15,11.1V8.4l5.7,3.6l-9.1,5.7V6.3z"/>
<g>
    <path d="M35.3,13.1v5.3c0,1.4-0.4,1.7-1.9,1.8l-0.7,0.1L32.3,19l0.8-0.1c0.8-0.1,1-0.3,1-1v-4.3c-0.9,0.4-1.8,0.8-2.4,1l-0.2-1.3
        c0.6-0.2,1.6-0.6,2.6-1V8.8h-2V7.5h2V4.3l1.2,0v3.2h1.6v1.2h-1.6v2.9c0.5-0.3,1-0.5,1.4-0.7l0.1,0.8l0.1,0.6
        C36.5,12.6,35.9,12.8,35.3,13.1z M47.4,20.2c-2.1-0.5-3.9-1-5.5-1.7c-1.4,0.7-3.2,1.2-5.6,1.8L35.8,19c2.1-0.4,3.7-0.8,4.9-1.3
        c-0.9-0.6-1.7-1.4-2.5-2.3l0.6-0.5h-1.5v-1.1h4v-1.5h-3.8V6c0.8-0.2,2-0.5,3-0.9l0.5,1.1c-0.8,0.3-1.7,0.6-2.3,0.8v1.5h2.1v1.1
        h-2.1v1.7h2.7v-7l1.3,0v7h2.8V9.6h-2.2V8.5h2.2V6.8h-2.3V5.7h3.4v6.7h-4v1.5h3.6v1.1c-0.9,1.2-1.8,2.1-2.9,2.9
        c1.2,0.5,2.7,0.8,4.7,1.2L47.4,20.2z M41.9,17.2c1-0.6,1.8-1.3,2.6-2.2h-5.3C40.1,15.9,40.9,16.6,41.9,17.2z"/>
    <path d="M55,17.4c-1.4,1-3.3,2-4.9,2.7l-0.6-1.2c1.5-0.7,3.7-1.7,4.9-2.6L55,17.4z M58.4,15.6v2.5c0,1.5-0.5,2-2.3,2.1l-0.9,0.1
        L54.7,19l1.1-0.1c1.1-0.1,1.3-0.3,1.3-1.1v-2.1c-1.8,0.1-3.5,0.1-4.3,0.2c-0.5,0.1-1.3,0.1-1.9,0.2l-0.2-1.1c0.5,0,1.2-0.1,1.6-0.2
        c1.5-0.4,3.1-1.1,4.6-1.9l-3.9,0.1c-0.3,0-1.1,0-1.4,0.1l-0.2-0.9c0.6-0.1,1-0.1,1.3-0.2c1-0.5,2.5-1.4,3.7-2.3h-4.7v2h-1.3V8.4
        h6.4V6.8h-6.1V5.6h6.1V4.1l1.3,0.1v1.5h6.1v1.2h-6.1v1.6h6.4v3.2h-1.3V9.6h-6.3l0.5,0.5c-0.9,0.7-1.7,1.2-2.5,1.7
        c0.8,0,2.7,0,3.7-0.1c0.9-0.5,1.7-1,2.4-1.5l0.7,1c-2.1,1.4-4.2,2.6-6.3,3.4c1.4,0,4.5-0.1,6.4-0.2c-0.5-0.4-1-0.8-1.4-1l0.8-0.9
        c1,0.6,2.8,2.1,3.5,3L64,16.6c-0.3-0.3-0.6-0.7-1-1.1C62.1,15.6,60.3,15.6,58.4,15.6z M65.7,18.7L65.1,20c-1.2-0.8-4.1-2.1-5.4-2.6
        l0.6-1.1C61.6,16.8,64.5,18.1,65.7,18.7z"/>
    <path d="M83.3,18.6v1.2h-16v-1.2h2.6V8.4h4.7V6.9h-6.5V5.7h6.5V4.1L76,4.2v1.5h6.5v1.2H76v1.5h4.7v10.2H83.3z M71.3,9.5v1.4h8V9.5
        H71.3z M79.3,12h-8v1.4h8V12z M71.3,14.5v1.4h8v-1.4H71.3z M71.3,18.6h8V17h-8V18.6z"/>
    <path d="M101.3,18.4l-0.3,1.4c-1.5,0.1-4.2,0.1-5.7,0.1c-3.7-0.1-5.3-0.2-7.3-2.2c-0.7,0.8-1.1,1.3-2.1,2.3l-1-1
        c1-0.9,1.9-1.8,2.5-2.6v-5h-1.9v-1.3h3.2v6.5c1.7,1.7,3.1,1.9,6.2,1.9C97.1,18.6,99.4,18.5,101.3,18.4z M85.8,5.4l1-0.9
        c0.7,0.7,2.1,2.2,2.7,3.1l-1,1.1C87.7,7.5,86.6,6.2,85.8,5.4z M94.2,9.1h-4.1V7.7h4.1c0-1,0-3,0-3.6l1.5,0.1l0,3.6h4.7v1.3h-4.8
        c0,0.8-0.1,1.5-0.3,2.2c1.3,1.1,4.1,3.9,5.1,5.2l-1,1.1c-1-1.5-3.2-3.8-4.5-5c-0.8,1.8-2.1,3.1-4.4,4.8l-0.9-1
        C92.9,14.1,94,12.2,94.2,9.1z"/>
</g>
</svg>

</a>`);
    }
})();
