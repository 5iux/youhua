// ==UserScript==
// @name         pinterest美化
// @namespace    https://blog.5iux.cn
// @version      0.1.2
// @description  简单美化下pinterest,主要针对部分圆角过大调整、字体更换为非衬线体。
// @author       DYoung
// @match        *://www.pinterest.com*
// @match        *://www.pinterest.co.uk*
// @match        *://www.pinterest.ca*
// @match        *://www.pinterest.co.jp*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
        $("head").append('<style>\
	   body{ font-family:sans-serif !important; font-weight: normal;}\
	   .iFc{ font-family:sans-serif !important; font-weight: normal;}\
	   .iFc.MF7{font-size:12px;}\
       .XiG.sLG.zI7.iyn.Hsu{ border-radius:5px !important;}\
       .Pj7.sLG.XiG.ho-.m1e{border-radius:5px !important;}\
       .lH1.dyH.iFc.kON.pBj.DrD.IZT.z-6 {font-size: 16px;}\
       .DUt.MMr.XiG.qJc.zI7.iyn.Hsu{border-radius:10px !important;}\
       .Jea.XiG.mQ8.zI7.iyn.Hsu{border-radius:10px !important;}\
       .sLG.zI7.iyn.Hsu{border-radius:10px !important;}\
       .XiG.zI7.iyn.Hsu{border-radius:10px !important;}\
	</style>');

    // Your code here...
})();