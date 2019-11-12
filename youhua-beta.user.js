// ==UserScript==
// @name         韩都淘内优化连接 beta
// @namespace    https://5iux.github.io/youhua
// @version      2019.11.12.1
// @description  本脚本主要针对淘内后台优化，优化链接http缺失、一键居中、模块去除10像素间距等；装修后台增加新窗口打开，欢迎交流使用;
// @author       D.Young
// @match        *://siteadmin.tmall.com/module*
// @match        *://mai.taobao.com/seller_admin.htm*
// @match        *://siteadmin.taobao.com/module*
// @match        *://siteadmin.tmall.com/design.htm*
// @match        *://siteadmin.tmall.com/page/pageManager.htm*
// @match        *://siteadmin.taobao.com/design.htm*
// @match        *://siteadmin.tmall.com/preview.htm*
// @match        *://siteadmin.taobao.com/preview.htm*
// @match        *://login.taobao.com/member/login.jhtml*
// @require      https://cdnjs.loli.net/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    //按钮样式
     GM_addStyle('.yy_yh1124 { width: 400px; text-align: center; font-family: Arial, "Microsoft Yahei"; position: absolute; z-index: 1000000000; right: 20px; height: 26px; color: #fff; line-height: 26px; }.yy_btn { width: auto; height: 26px; padding: 0 10px; float: right; cursor: pointer; border-radius: 15px; background: #0074ff; margin-left: 5px; }.yy_btn a{color: #fff; }.yy_btn:hover { background: #333; }.yy_btn:active { background: #f03; }');
     //消息弹窗
     GM_addStyle('.yy_message { width: 200px; height: 150px; background: #eee; border: 10px solid #09F; font-family: Arial, "Microsoft YaHei"; font-size: 14px; color: #000; text-align: left; z-index: 1000000000000; box-shadow: 0 0 300px #333; position: fixed; left: 50%; margin-left: -110px; top: 50%; margin-top: -85px; }.yy_message .yy_cl { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #06F; width: 40px; height: 40px; position: absolute; z-index: 10; right: -50px; top: -10px; cursor: pointer; }.yy_message .yy_cl:active { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #F63; }.yy_message .yy_tile { width: 100%; height: 30px; line-height: 30px; background: #06F; text-align: center; color: #fff; font-size: 14px; float: left; }.yy_message .yy_input { width: 100%; height: 30px; margin-top: 30px; float: left; }.yy_message .yy_input input { width: 90%; display: block; margin: 0 auto; height: 30px; outline: none; text-indent: 10px; padding: 0; text-align: left; border: 1px solid #09F; }.yy_message .yy_button { width: 120px; height: 30px; float: left; margin: 20px 0 0 40px; text-align: center; height: 26px; line-height: 26px; background: #F63; color: #fff; border-radius: 13px; cursor: pointer; border: none; padding: 0; outline: none; }.yy_message .yy_button:active { background: #F30; }');
     //消息弹窗2
     GM_addStyle('.yy_msg { width: 200px; height:240px; background: #eee; border: 10px solid #09F; font-family: Arial, "Microsoft YaHei"; font-size: 14px; color: #000; text-align: left; z-index: 1000000000000; box-shadow: 0 0 300px #333; position: fixed; left:0; right:0; bottom: 0; top:0; margin:auto; }.yy_msg .yy_cl { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #06F; width: 40px; height: 40px; position: absolute; z-index: 10; right: -50px; top: -10px; cursor: pointer; }.yy_msg .yy_cl:active { background: url(https://img.alicdn.com/tps/i2/T1LbYvXX8hXXcbU07.-12-12.gif) no-repeat center center #F63; }.yy_msg .yy_tile { width: 100%; height: 30px; line-height: 30px; background: #06F; text-align: center; color: #fff; font-size: 14px; float: left; }.yy_msg .yy_input { width: 100%;margin-top: 10px; float: left; }.yy_msg .yy_input input { width: 90%; display: block; margin: 0 auto; height: 30px; outline: none; text-indent: 10px; padding: 0; text-align: left; border: 1px solid #09F; }.yy_msg .yy_input span { width: 90%; display: block; margin: 0 auto; height:30px; line-height: 30px;  text-indent: 10px; text-align: left; font-size: 12px; color: #000;}.yy_msg .yy_button { width: 120px; height: 30px; float: left; margin: 20px 0 0 40px; text-align: center; height: 26px; line-height: 26px; background: #F63; color: #fff; border-radius: 13px; cursor: pointer; border: none; padding: 0; outline: none; }.yy_msg .yy_button:active { background: #F30; }.yy_msg i{ clear: both; display: block; width: 100%; height:10px; }');
     //超级css编辑器
     GM_addStyle('.yycopy{ width: 80px !important; } .vl-sidebar .toolbar .css-slide .J_CSSText.csstext { width: 100%; }');
     //千牛二维码
     GM_addStyle('#J-qrcode-wrap{ display:none !important}#vl-preview-top{ position: absolute !important; }#J_MUIMallbar{display:none !important}.tshop-psm-shop-ww-hover{display:none !important}#HUABAN_WIDGETS{display:none !important }.bluegirl{ display: none; }.aw-wrapper{ display: none !important; }');
     //装修直达
     GM_addStyle('.zxbtn{position: fixed; left: 50%; margin-left: -650px; z-index: 10000; opacity: 0.8; animation:dymove 1s infinite;}');


$("#mytaobao-panel .col-main").before('<div class="zxbtn"><a href="https://wangpu.taobao.com/pcPageList.htm?#/selfDefine" target="_blank"><img src="https://img.alicdn.com/imgextra/i1/263817957/TB2XDx6X8PCIuJjSZPcXXccYFXa-263817957.png"></a></div>');
$(document).ready(function(e) {
    $("#TPL_password_1").attr('type;', 'text');
  //强制店铺装修到装修页面
 $("#J_QuickMenu").find("a:contains('店铺装修')").css('color', 'red');
 $("#J_QuickMenu").find("a:contains('店铺装修')").attr('href', 'https://wangpu.taobao.com/pcPageList.htm?#/selfDefine');
   //强制跳转到PC装修
//$("#client-tab #client-pc").click();
  /*$("#client-tab #client-pc").addClass("selected");
$("#client-tab #client-mobile").removeClass("selected");
 $("#mobile-page").css("display","none");
 $(".shop-tmall.page-current").removeClass("page-current");*/
 //编辑器添加优化按钮    
 $(".form-default[name=editform]").before('<div class="yy_yh1124" style="position:absolute;"><div class="yy_btn yy_btn01">优化链接</div><div class="yy_btn yy_btn02">去10px</div><div class="yy_btn yy_btn03">一键居中</div><div class="yy_btn yy_btn05">上下间距</div></div>');
 $(".form-default[name=customSetForm]").before('<div class="yy_yh1124" style="position:absolute;"><div class="yy_btn yy_btn01">优化链接</div></div>');
 $(".auto-rec-form.form-default").before('<div style="margin-top:400px; position:absolute;" class="yy_yh1124"><div class="yy_btn yy_btn01">优化链接</div></div>');
 //优化链接
 $(".yy_yh1124 .yy_btn01").click(function(e) {
    var a01=$(".form-default").find("textarea").val();
        a01=a01.replace(/src="\/\/gdp/g,'src="http://img'); 
        a01=a01.replace(/src="\/\//g,'src="http://'); 
        a01=a01.replace(/background:url\(\/\/gdp/g,'background:url(http://img'); 
        a01=a01.replace(/background:url\(https:\/\/gdp/g,'background:url(http://img'); 
        a01=a01.replace(/href="\/\//g,'href="http://'); 
        a01=a01.replace(/href="https:\/\//g,'href="http://'); 
        a01=a01.replace(/\?scene=taobao_shop/g,''); 
        a01=a01.replace(/data-pinit="registered"/g,''); 
        a01=a01.replace(/data-spm-anchor-id="0.0.0.0"/g,''); 
        a01=a01.replace(/&quot;/g,'\''); 
        //a01=a01.replace(/&apos;/g,'\''); 
        $(".form-default").find("textarea").val(a01);

 });
 //一键去除缝隙
 $(".yy_yh1124 .yy_btn02").click(function(e) {
    var a01=$(".form-default").find("textarea").val();
        $html=$("<div class='yy_cunc'>"+a01+"</div>");
        $("body").append($html);
        $(".yy_cunc :first").addClass("up10");
        a01=$(".yy_cunc").html();
        $(".form-default").find("textarea").val(a01);
        $(".yy_cunc").remove();
 });
 //新窗口打开
  $("#v3-header a").attr("target","_blank");         
  $(".page-list-wrap.J_PageListWrapPopup a").attr("target","_blank");       
  //预览页添加店招全屏
  $("#hd .layout").css("overflow","visible");

 
});
//一键居中
$(document).ready(function() {
    var $hml=$('<div class="yy_message" style="display:none;"><div class="yy_cl"></div><div class="yy_tile">请输入模块宽度</div><div class="yy_input"><input value="1920" class="yy_widt" type="number"></div><button class="yy_button">确定并居中</button></div>');
    $("body").append($hml);
   $(".yy_yh1124 .yy_btn03").click(function(e) {
        $(".yy_message").fadeIn();
        $(".yy_message input").focus();
        
    });
    $(".yy_message .yy_cl").click(function() {
        $(".yy_message").fadeOut();;
    });
    $(".yy_message .yy_button").click(function() {
        var a01=$(".form-default").find("textarea").val();
        var murl=window.location.hostname;
        var widt=$(".yy_widt").val();
        if(murl=="siteadmin.tmall.com"){
              if(widt==1920){
                    prit='<div class="left465" style="width:1920px;">'+a01+'</div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt<1920 & widt>990){
                    prit='<div class="left465" style="width:1920px;"><div style="width:'+widt+'px; margin: 0 auto;">'+a01+'</div></div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt<990){
                    prit='<div style="width:'+widt+'px; margin: 0 auto;">'+a01+'</div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt=990){
                    alert("990不用添加居中");
              }else{
                    alert("超出宽度范围！");
                  };
        }else if(murl=="siteadmin.taobao.com"){
              if(widt==1920){
                    prit='<div class="left465" style="width:1920px;">'+a01+'</div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt<1920 & widt>950){
                    prit='<div class="left465" style="width:1920px;"><div style="width:'+widt+'px; margin: 0 auto;">'+a01+'</div></div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt<950){
                    prit='<div style="width:'+widt+'px; margin: 0 auto;">'+a01+'</div>';
                    $(".form-default").find("textarea").val(prit);
              }else if(widt=950){
                    alert("950不用添加居中");
              }else{
                    alert("超出宽度范围！");
                  };
        };
        $(".yy_message").fadeOut();
    });
 });

$(document).ready(function() {
  //复制样式表

    $(".css-slide .btn span").before('<span class="yycopy" style="margin-right:5px; color:#f03;">复制</span>');
    $(".yycopy").click(function () {  
        var Url2=$(".J_CSSText");
        Url2.select(); // 选择对象
        document.execCommand("Copy");//复制
        $(this).text("已复制");
    });
    $(".yycopy").mouseover(function() {
        $(this).text("复制");
    });
    $(".yycopy").mouseleave(function() {
        $(this).text("复制");
    });
});


//间距
$(document).ready(function() {
    var $hml2=$('<div class="yy_msg" style="display:none;"> <div class="yy_cl"></div> <div class="yy_tile">输入间距</div><div class="yy_input"><span>顶部增加高度</span>  <input placeholder="可不填" class="yy_toph" type="number">        <span>底部增加高度</span>        <input placeholder="可不填" class="yy_btmh" type="number">    </div>    <button class="yy_button">确定</button>    <i></i></div>');
    $("body").append($hml2);
   $(".yy_yh1124 .yy_btn05").click(function() {
        $(".yy_msg").fadeIn();
        $(".yy_msg input").focus();
        
    });
    $(".yy_msg .yy_cl").click(function() {
        $(".yy_msg").fadeOut();
    });
    $(".yy_msg .yy_button").click(function() {
        var a01=$(".form-default").find("textarea").val();
        var a02=$(".yy_toph").val();
        var a03=$(".yy_btmh").val();
            if (a02==0 || a02==null) {
                if(a03==0 || a03==null){
                    alert("未填写上下间距！");
                }
                else{
                    var prt=a01+'<i class="h_jg" data-title="间距" style="height:'+a03+'px\;"></i>';
                    $(".form-default").find("textarea").val(prt);
                }
                
            } 
            else{
                if(a03==0 || a03==null){
                    var pr='<i class="h_jg" data-title="间距" style="height:'+a02+'px\;"></i>'+a01;
                    $(".form-default").find("textarea").val(pr);
                }
                else{
                    var pt='<i class="h_jg" data-title="间距" style="height:'+a02+'px\;"></i>'+a01+'<i class="h_jg" data-title="间距" style="height:'+a03+'px\;"></i>';
                    $(".form-default").find("textarea").val(pt);
                }

            }

            $(".yy_msg").fadeOut();

    });
});

/*
$(document).ready(function() {
    $("#react-root article").onmouseover(function() {
        //$(this).children(':eq(1)').addClass('.insbox');
        var x=$(this).children(':eq(1)').find('img');
        x.parent("div").addClass('insbox')
    });
    /*$(".ins_btn").each(function(index, el) {
        $(this).parents(".insbox").find('img').addClass('ins_img');
        $(this).click(function(event) {
            
        });
    });
});
*/




})();