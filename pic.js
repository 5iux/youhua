$(document).ready(function(e) {
        $(".wp-topnav-link:last").after('<a class="wp-topnav-link hy_btn01">店铺装修</a>');
        $(".hy_btn01").click(function(e) {
            $("[title='店铺装修████']").click();
        });
    });