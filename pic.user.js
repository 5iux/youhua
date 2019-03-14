// ==UserScript==
// @name         图片空间跳转
// @namespace    https://5iux.github.io/youhua
// @version      2019.3.14
// @description  图片空间跳转
// @author       D.Young
// @match        *sucai.wangpu.taobao.com*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(function(e) {
        $(".wp-topnav-link:last").after('<a class="wp-topnav-link hy_btn01">店铺装修</a>');
        $(".hy_btn01").click(function(e) {
            $("[title='店铺装修████']").click();
        });
    });

})();
