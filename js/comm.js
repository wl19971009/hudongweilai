/**
 * Created by Admin on 2016/10/25.
 */
$(document).ready(function(){
    $('#c-span div').click(function () {
        var index = $(this).index();
        $(this).attr('class',"c-span-on").siblings('div').removeClass('c-span-on');
        $("#c-span div span .c-t-name").eq($(this).index()).addClass("c-t-line");
        $("#c-span div span").eq($(this).index()).siblings().children().removeClass("c-t-line");
        $("#c-span div span").eq($(this).index()).addClass("ac");
        $("#c-span div").eq($(this).index()).siblings().children().removeClass("ac");
        $('.c-table-box').eq(index).show().siblings('.c-table-box').hide();
    });
        $('.comm .c-t-container .box ul li').click(function () {
        var index = $(this).index();
        $(".comm .c-t-container .box ul li").eq($(this).index()).addClass("aa").siblings().removeClass("aa");
        $('.c-table-box').eq(index).show().siblings('.c-table-box').hide();
        });
    $('.s-m-span div').click(function () {
        var index = $(this).index();
        $(this).attr('class',"c-span-on").siblings('div').removeClass('c-span-on');
        $("#cm div span .c-t-name").eq($(this).index()).addClass("xian");
        $("#cm div span").eq($(this).index()).siblings().removeClass("xian");
        $(".s-m-span div span").eq($(this).index()).addClass("cc");
        $(".s-m-span  div").eq($(this).index()).siblings().children().removeClass("cc");
        $('.s-m-tbox').eq(index).show().siblings('.s-m-tbox').hide();
    });
    $('.wl-quanwang-container .dianshang li').click(function () {
        var index = $(this).index();
        $(this).attr('class',"active").siblings('.wl-quanwang-container .dianshang li').removeClass('active');
        $('.text_box').eq(index).show().siblings('.text_box').hide();
    });
    $('.section-9 .w-map .w-map-box div').click(function () {
        var index = $(this).index();
        //$(this).attr('class',"w-map-on").siblings('div').attr('class',"cricle");
        $(".section-9 .w-map .w-map-box div").eq($(this).index()).addClass("w-map-on").siblings().removeClass("w-map-on");
        $('.section-9 .ditu iframe').eq(index).show().siblings('.c-table-box').hide();
    });
    $('#jia_1,#jia_2').click(function(){
        $('#zhize').slideToggle();
    })

    $('#jia_3,#jia_4').click(function(){
        $('#zhize_2').slideToggle();
    })
    $('#jia_6,#jia_5').click(function(){
        $('#zhize_3').slideToggle();
    })
    $('#jia_7,#jia_8').click(function(){
        $('#zhize_4').slideToggle();
    })
    $('#jia_9,#jia_10').click(function(){
        $('#zhize_5').slideToggle();
    });
    $(document).ready(function(){
        $('.wl-shuzi-container .youshi .al div').click(function () {
            var index = $(this).index();
            $(this).attr('class',"shen").siblings('.wl-shuzi-container .youshi .al div').attr('class',"left right");
            $('.wl-shuzi-container .tiyu').eq(index).show().siblings('.wl-shuzi-container .tiyu').hide();
        });
    });
    $(function(){
        var i=0;
        var a=0;
        var n = $('.our .qiye .box_top ul li').length;
        var b = $('.our .qiye .new li').length;
        var len = $(".our .qiye .box .new .new_box").height();
        var length = $(".our .qiye .box .box_top").width();
        $(".img1").click(function(){
            if(i == 0){

            }
            else{
                i--;
                var left = $(".our .qiye .box ul li").eq(i).position().left;
                if(left-124 < length){
                    $('.box_top').scrollLeft(i*124);
                }
                $(".our .qiye .box ul li").eq(i).addClass("activ").siblings().removeClass("activ");
            }
            if(a == 0){

            }
            else{
                a--;
                var top = $(".our .qiye .new li").eq(a).position().top;
                if(top-150 < len){
                    $('.new_box').scrollTop(a*150);
                }
            }

        });
        $(".img3").click(function(){
            if(i == 0){

            }
            else{
                i--;
                var left = $(".our .qiye .box ul li").eq(i).position().left;
                if(left-45 < length){
                    $('.box_top').scrollLeft(i*45);
                }
                $(".our .qiye .box ul li").eq(i).addClass("activ").siblings().removeClass("activ");
            }
            if(a == 0){

            }
            else{
                a--;
                var top = $(".our .qiye .new li").eq(a).position().top;
                if(top-150 < len){
                    $('.new_box').scrollTop(a*150);
                }
            }
        });
        $(".img2").click(function(){
            if(i == n-1){

            }
            else{
                i++;
                var left = $(".our .qiye .box ul li").eq(i).position().left;
                if(left+124 > length){
                    $('.box_top').scrollLeft(i*124);
                }
                $(".our .qiye .box ul li").eq(i).addClass("activ").siblings().removeClass("activ");
            }
            if(a == b-1){

            }
            else{
                a++;
                var top = $(".our .qiye .new li").eq(a).position().top;
                if(top+130> len){
                    $('.new_box').scrollTop(a*30);
                }
            }
        });
        $(".img4").click(function(){
            if(i == n-1){

            }
            else{
                i++;
                var left = $(".our .qiye .box ul li").eq(i).position().left;
                if(left+45 > length){
                    $('.box_top').scrollLeft(i*45);
                }
                $(".our .qiye .box ul li").eq(i).addClass("activ").siblings().removeClass("activ");
            }
            if(a == b-1){

            }
            else{
                a++;
                var top = $(".our .qiye .new li").eq(a).position().top;
                if(top+200> len){
                    $('.new_box').scrollTop(a*200);
                }
            }
        });
    });
    $('.our .o-span-t span').click(function () {
        var index = $(this).index();
        $(this).attr('class',"o-span-on").siblings('span').removeClass('o-span-on');
        $('.our .o-span-word').eq(index).show().siblings('.our .o-span-word').hide();
    });
    $(document).ready(function(){
        var screenWidth = window.screen.width;
        if (screenWidth >= 1200){
            $(".change .c-banner .c-b-word").animate({marginTop: "0px", opacity:"1"},1000);
            /*change*/
            $(".change .chage-ul li").mouseover(function(){
                $(this).css({border:"1px solid #cc0000"});
                $(this).find("span").hide();
                $(this).find("img").css({display:"block"}).show();
            })
            $(".change .chage-ul li").mouseout(function(){
                $(this).css({border:"1px solid #ccc"});
                $(this).find("img").hide();
                $(this).find("span").show();
            })
        }
        if (screenWidth <= 768){
            /*change*/
            $(".change .chage-ul li").mouseover(function(){
                $(this).css({border:"1px solid #cc0000",height:"100px"});
                $(this).find("span").hide();
                $(this).find("img").css({display:"block"}).show();
            })
            $(".change .chage-ul li").mouseout(function(){
                $(this).css({border:"1px solid #ccc",height:"35px"});
                $(this).find("img").hide();
                $(this).find("span").show();
            })

        }

    })
    $(document).scroll(function(){
        var h=$(document).scrollTop();
        if(h>=668){
            $("chage")
        }
        if(h>=1600){
            $(".change .c-m-b-1 .c-m-b-left").animate({marginLeft:"0px"},1000);
            $(".change .c-m-b-1 .c-m-b-right").animate({marginRight:"0px"},1000);
        }
    });
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    })
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    });

})
$(function() {
    $(".lb li").on("click", option);
});
var list=$(".lb li"),hei=$(".column1");
function option(){
    list.removeClass("active");
    hei.css({display:'none'});
    $(this).addClass("active");
    var i=$(this).index();
    $(hei[i]).css({display:"block"});
}