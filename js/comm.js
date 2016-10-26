/**
 * Created by Admin on 2016/10/25.
 */
$(document).ready(function(){
    $('#c-span span').click(function () {
        var index = $(this).index();
        $(this).attr('class',"c-span-on").siblings('span').removeClass('c-span-on');
        $('.c-table-box').eq(index).show().siblings('.c-table-box').hide();
    });
    $('.s-m-span span').click(function () {
        var index = $(this).index();
        $(this).attr('class',"c-span-on").siblings('span').removeClass('c-span-on');
        $('.s-m-tbox').eq(index).show().siblings('.s-m-tbox').hide();
    });
    $('.wl-quanwang-container .dianshang li').click(function () {
        var index = $(this).index();
        $(this).attr('class',"active").siblings('.wl-quanwang-container .dianshang li').removeClass('active');
        $('.text_box').eq(index).show().siblings('.text_box').hide();
    });
})