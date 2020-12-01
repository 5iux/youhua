/*
Date:2020.12.21.01
*/
$("#container").before('<div class="zxbtn">\
    <a class="zx_a" href="https://wangpu.taobao.com/wirelessPageList.htm?version=1.0#/shop_index-index/basic?tabId=0" target="_blank" title="无线店铺装修">\
       <img src="https://img.alicdn.com/imgextra/i4/263817957/O1CN01WG9giL28eM4mTLRUo_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://wangpu.taobao.com/pcPageList.htm?#/selfDefine" target="_blank" title="PC店铺装修">\
       <img src="https://img.alicdn.com/imgextra/i2/263817957/O1CN01KseKdH28eM4jwB4Al_!!263817957.png"></a>\
    <a class="zx_a" href="https://meidian.play.admin.jaeapp.com/back/back_list.htm" target="_blank" title="美店">\
       <img src="https://img.alicdn.com/imgextra/i1/263817957/O1CN01mBdgDo28eM4lPscky_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://wxbadmin.hz.taeapp.com/index.php?c=activity&m=index" target="_blank" title="无线宝">\
       <img src="https://img.alicdn.com/imgextra/i3/263817957/O1CN01cYWqsD28eM4iTgIyG_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://sucai.wangpu.taobao.com/" target="_blank" title="图片空间">\
       <img src="https://img.alicdn.com/imgextra/i4/263817957/O1CN013lDApg28eM5LUxdWB_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://sucai.wangpu.taobao.com/#/manage/video" target="_blank" title="视频媒体空间">\
       <img src="https://img.alicdn.com/imgextra/i2/263817957/O1CN01OJRQWv28eM5TubmuJ_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://sycm.taobao.com/portal/home.htm" target="_blank" title="生意参谋">\
       <img src="https://img.alicdn.com/imgextra/i4/263817957/O1CN011npJKm28eM8BS8p9S_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://h5.m.taobao.com/qn/pc/2-03-00/plugin-guide.html?appkey=12502150" target="_blank" title="商品批量修改">\
       <img src="https://img.alicdn.com/imgextra/i2/263817957/O1CN01Ddumeg28eM8ItmfPT_!!263817957.png" alt=""></a>\
    <a class="zx_a" href="https://h5.m.taobao.com/qn/pc/2-03-00/plugin-guide.html?appkey=21797241" target="_blank" title="盛夏建站插件">\
       <img src="https://img.alicdn.com/imgextra/i1/263817957/O1CN01z1PzMB28eM8DS7ukx_!!263817957.png" alt=""></a>\
</div>');
$(document).ready(function(e) {
  //强制店铺装修到装修页面
 /*$("#J_QuickMenu").find("a:contains('店铺装修')").css('color', 'red');
 $("#J_QuickMenu").find("a:contains('店铺装修')").attr('href', 'https://wangpu.taobao.com/pcPageList.htm?#/selfDefine');*/
   //强制跳转到PC装修
//$("#client-tab #client-pc").click();
  /*$("#client-tab #client-pc").addClass("selected");
$("#client-tab #client-mobile").removeClass("selected");
 $("#mobile-page").css("display","none");
 $(".shop-tmall.page-current").removeClass("page-current");*/
 //编辑器添加优化按钮    
 $(".form-default[name=editform]").before('<div class="yy_yh1124" style="position:absolute;">\
    <div class="yy_btn yy_btn01">优化链接</div>\
    <div class="yy_btn yy_btn02">去10px</div>\
    <div class="yy_btn yy_btn03">一键居中</div>\
    <div class="yy_btn yy_btn05">上下间距</div>\
    </div>');
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
/*
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
*/

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

