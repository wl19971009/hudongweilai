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
    $('.section-9 .w-map .w-map-box div').click(function () {
        var index = $(this).index();
        $(this).attr('class',"w-map-on").siblings('div').attr('class',"cricle");
        $('.section-9 .ditu iframe').eq(index).show().siblings('.c-table-box').hide();
    });
    $(document).ready(function(){
        $('.wl-zhaopin-container .qiehuan .bottom li').click(function () {
            var index = $(this).index();
            $(".wl-zhaopin-container .qiehuan .bottom li").eq($(this).index()).addClass("color").siblings().removeClass("color");
            $('.wl-zhaopin-container .qiehuan .text-box .text_1 ').eq(index).show().siblings('.wl-zhaopin-container .qiehuan .text-box .text_1 ').hide();
        });
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
        var n = $('.our .qiye .box ul li').length;
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