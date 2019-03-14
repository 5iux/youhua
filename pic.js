$("body").after('<div class="wp-topnav-link hy_btn01">店铺装修</div><div class="wp-topnav-link hy_btn02">旗舰店店铺装修</div>');
$(document).ready(function(e) {
    $(".hy_btn01").click(function(e) {
      $("[title='店铺装修████']").click();
    });
    $(".hy_btn02").click(function(e) {
      $("[title='旗舰店店铺装修']").click();
    });
});