// ==UserScript==
// @name         pinterest优化
// @namespace    https://blog.5iux.cn
// @version      0.1.5
// @description  简单美化下pinterest,主要针对部分圆角过大调整、调整部分字体字号，整体更换为等线体。
// @author       DYoung
// @include      https://*.pinterest.tld/*
// @include        https://*.pinterest.com/*
// @include        https://*.pinterest.co.uk/*
// @include        https://*.pinterest.co.kr/*
// @include        https://*.pinterest.ca/*
// @include        https://*.pinterest.co/*
// @include        https://*.pinterest.co.jp/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js
// @grant        GM_addStyle
// @grant        GM_openInTab
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
       .Jea.mQ8.ujU.zI7.iyn.Hsu {border-radius: 10px !important;}\
       .MIw.QLY.Rym.ojN.p6V.zI7.iyn.Hsu {border-radius: 5px !important;}\
       .Jea.fev.gpV.zI7.iyn.Hsu { border-radius: 10px;}\
  </style>');

    // Your code here...
})();