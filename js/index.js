/**
 * Created by harryliu on 9/10/16.
 */
$(document).ready(function() {
    var divAnimationTime = 500;
    $('#fullpage').fullpage({
        loopBottom: false,
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip:true,
        navigationTooltips: ['互动未来','企业互联网话转型','全网技术平台开发','全生态商业化运营','数字整合营销','品牌声誉管理','关于我们','咨询','联系我们'],
        anchors: ['home', 'consulting', 'develop', 'operation', 'marketing', 'reputation', 'about', 'ask', 'job', 'contact'],
        afterLoad: function (anchorLink, index) {
            var screenWidth = window.screen.width;
            if (index == 1) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("互动未来");
                    $('.section-1 .text').animate({left: "50%", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    $('.section-1 .text').animate({left: "50%", opacity: 1}, divAnimationTime);
                }
                else {
                    $('.section-1 .text').animate({left: "50%", opacity: 1}, divAnimationTime);
                }

            }
            if (index == 2) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("企业互联网化化转型");
                    $('.bottom-transparent-cover').animate({height: "75%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({left: "0", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({right: "0", opacity: 1}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("企业互联网化化转型");
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({left: "0", opacity: 1}, divAnimationTime);
                }

            }
            if (index == 3) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("全网技术平台开发");
                    $('.text_t').animate({marginLeft: "0", opacity: 1}, divAnimationTime);
                    $('.list_box').transition({scale: "1", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    var winH = $(window).height();
                    $('.pc_box').animate({height: winH + "px", opacity: 1}, divAnimationTime);
                    $('.img_box').animate({left:"110px", opacity: 1}, divAnimationTime);
                    $('.text_t').animate({left: "5%", opacity: 1}, divAnimationTime);
                    $('.list_box').transition({scale: "1", opacity: 1}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("全网技术平台开发");
                    $('.text_t').animate({marginLeft: "0", opacity: 1}, divAnimationTime);
                    $('.list_box').animate({left: "0", opacity: 1}, divAnimationTime);
                }

            }
            if (index == 4) {

                if (screenWidth >= 1200) {
                    var height = $(window).height();
                    $('.list-box').animate({marginLeft:"-470px", opacity: 1}, divAnimationTime);
                    $('.boxright').animate({right: "0", opacity: 1}, divAnimationTime);
                    $('.boxleft').transition({scale: "1", opacity: 1}, 700);
                    $('.w-row').animate({height: height + "px", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth <= 768) {
                    $(".top-top .right span").text("全生态商业化运营");
                    var height = $('.section-4').height();
                    $('.w-container').animate({height: height + "px", opacity: 1, top: "0"}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("全生态商业化运营");
                    var height = $('.section-4').height();
                    $('.w-container').animate({height: height + "px", opacity: 1, top: "0"}, divAnimationTime);

                }
            }
            if (index == 5) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("数字整合营销");
                    $('.bottom-transparent-cover').animate({height: "75%"}, divAnimationTime);
                    $('.tag-container_2').animate({right: "0", opacity: 1}, divAnimationTime);
                    $('.words-container_2').animate({left: "0", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container_2').animate({right: "0", opacity: 1}, divAnimationTime);
                    $('.words-container_2').animate({left: "0", opacity: 1}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("数字整合营销");
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container_2').animate({right: "0", opacity: 1}, divAnimationTime);
                    $('.words-container_2').animate({left: "0", opacity: 1}, divAnimationTime);
                }

            }
            if (index == 6) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("品牌声誉管理");
                    $('.w-back-red').animate({height: "80%", bottom: "5%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({left: "0", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({right: "0", opacity: 1}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("品牌声誉管理");
                    $('.bottom-transparent-cover').animate({height: "50%"}, divAnimationTime);
                    $('.tag-container').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.words-container').animate({left: "0", opacity: 1}, divAnimationTime);
                }

            }
            if (index == 7) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("关于我们");
                    $('.left_box ').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.right_box .text').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.right_box .xuanzhuan').animate({right: "0", opacity: 1}, divAnimationTime);
                }
                else if (screenWidth >= 1200) {
                    $('.left_box').animate({left: "0", opacity: 1}, divAnimationTime);
                    $('.right_box').animate({right: "0", opacity: 1}, divAnimationTime);
                }
                else {
                    $(".top-top .right span").text("关于我们");
                    $('.left_box ').animate({marginLeft: "0", opacity: 1}, divAnimationTime);
                    $('.right_box').animate({marginRight: "0", opacity: 1}, divAnimationTime);
                }

            }

            if (index == 8) {


                if (screenWidth <= 768) {
                    $(".top-top .right span").text("咨询");
                    $('.w-backbox').animate({height: "100%", top: "0"}, divAnimationTime);


                }
                else if (screenWidth >= 1200) {
                    $('.w-backbox').animate({height: "100%", top: "0"}, divAnimationTime);
                    $('.r1').animate({width: "80%"}, 600);
                    $('.l1').animate({marginRight: "-6%"},600)
                    $('.r2').animate({width: "80%"},700);
                    $('.l2').animate({marginLeft: "-5%"}, 700)
                    $('.r3').animate({width: "80%"}, 900);
                    $('.l3').animate({marginRight: "-6%"}, 900)
                    $('.r4').animate({width: "80%"}, 1000);
                    $('.l4').animate({marginLeft: "-5%"}, 1000)
                    $('.r5').animate({width: "80%"}, 1100);
                    $('.l5').animate({marginRight: "-6%"}, 1100)
                    $('.r6').animate({width: "80%"}, 1200);
                    $('.l6').animate({marginLeft: "-5%"}, 1200)
                    $('.r7').animate({width: "80%"}, 1300);
                    $('.l7').animate({marginRight: "-6%"}, 1300)
                }


                else {
                    $('.w-backbox').animate({height: "100%", top: "0"}, divAnimationTime);
                    $('.w-message-right').animate({marginLeft: "0", opacity: 1}, divAnimationTime);

                }


            }
            if (index == 9) {
                if (screenWidth <= 768) {
                    $(".top-top .right span").text("联系我们");
                    $('.w-backbox').animate({height: "100%", top: "0"}, divAnimationTime);
                }

            }

        },


        onLeave: function (index) {
            var screenWidth = window.screen.width;
            if (index == 1) {
                if (screenWidth >= 1200) {
                    $('.section-1 .text').animate({left: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.section-1 .text').animate({left: "-50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 2) {
                if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container').animate({right: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container').animate({right: "-50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 3) {
                if (screenWidth >= 1200) {
                    $('.pc_box').animate({height: "0px", opacity: 0}, divAnimationTime);
                    $('.text_t').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.img_box').animate({left:"160px", opacity: 1}, divAnimationTime);
                    $('.list_box').transition({scale: "3", opacity: 0}, divAnimationTime);
                }
                else if (screenWidth <= 768) {
                    $('.text_t').animate({marginLeft: "-50px", opacity: 0}, divAnimationTime);
                    $('.list_box').animate({marginRight: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.text_t').animate({marginLeft: "-50px", opacity: 0}, divAnimationTime);
                    $('.list_box').animate({left: "-50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 4) {
                if (screenWidth >= 1200) {
                    /*  $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);*/
                    $('.list-box').animate({marginLeft:"-520px", opacity: 1}, divAnimationTime);
                    $('.boxright').animate({right: "-50px", opacity: 0}, divAnimationTime);
                    $('.boxleft').transition({scale: "3", opacity: 0}, 700);
                    $('.w-row').animate({height: "0px", opacity: 0}, divAnimationTime);
                }
                else if (screenWidth <= 768) {
                    $('.w-container').animate({height: "0px", opacity: 0, top: "-50px"}, divAnimationTime);
                }
                else {
                    $('.w-container').animate({height: "0px", opacity: 0, top: "-50px"}, divAnimationTime);
                }

            }
            if (index == 5) {
                if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container_2').animate({right: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container_2').animate({left: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container_2').animate({right: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container_2').animate({left: "-50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 6) {
                if (screenWidth >= 1200) {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container').animate({right: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.bottom-transparent-cover').animate({height: "0px"}, divAnimationTime);
                    $('.tag-container').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.words-container').animate({left: "50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 7) {
                if (screenWidth >= 1200) {
                    $('.left_box ').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.right_box').animate({right: "-50px", opacity: 0}, divAnimationTime);
                }
                else {
                    $('.left_box ').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.right_box .text').animate({left: "-50px", opacity: 0}, divAnimationTime);
                    $('.right_box .xuanzhuan').animate({right: "-50px", opacity: 0}, divAnimationTime);
                }
            }
            if (index == 8) {
                if (screenWidth >= 1200) {
                    $('.w-backbox').animate({height: "0px", opcity: 0}, divAnimationTime);
                    $('.r1').animate({width: "0"},1600);
                    $('.l1').animate({marginRight: "100%"}, 1600)
                    $('.r2').animate({width: "0"}, 1500);
                    $('.l2').animate({marginLeft: "100%"}, 1500)
                    $('.r3').animate({width: "0"}, 1400);
                    $('.l3').animate({marginRight: "100%"}, 1400)
                    $('.r4').animate({width: "0"}, 1300);
                    $('.l4').animate({marginLeft: "100%"}, 1300)
                    $('.r5').animate({width: "0%"}, 1200);
                    $('.l5').animate({marginRight: "100%"}, 1200)
                    $('.r6').animate({width: "0"}, 1100);
                    $('.l6').animate({marginLeft: "100%"}, 1100)
                    $('.r7').animate({width: "0"}, 1000);
                    $('.l7').animate({marginRight: "100%"}, 1000)
                }
                else {
                    $('.w-backbox').animate({height: "0px", opcity: 0}, divAnimationTime)

                }
            }
        }
    });


    $(".section-2 .tag-container .tag-container-tags .tag-container-tag").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-2 .tag-container img").eq(index).show().siblings().hide();
        $(".section-2 .words-container .contents").eq(index).show().siblings().hide();
    });
    $(".section-3 .container .list_box .box_b").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-3 .container .img_box .img_img").eq(index).show().siblings().hide();
        $(".section-3 .container .container_text .text_tes").eq(index).show().siblings().hide();
    });
    $(".section-4 .w-container .row .w-message .boxleft .left-row").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-4 .w-container .row .w-message .list-box img").eq(index).show().siblings().hide();
        $(".section-4 .w-container .box-message").eq(index).show().siblings().hide();
    });
    $(".section-5 .tag-container_2 .tag-container-tags .tag-container-tag").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-5 .tag-container_2 img").eq(index).show().siblings().hide();
        $(".section-5 .words-container_2 .contents").eq(index).show().siblings().hide();
    });
    $(".section-6 .tag-container .tag-container-tags .tag-container-tag").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-6 .tag-container img").eq(index).show().siblings().hide();
        $(".section-6 .words-container .contents").eq(index).show().siblings().hide();
    });
    $(".section-7 .right_box .xuanzhuan li").hover(function () {
        //$(this).addClass("on").siblings().removeClass("on");
        //var index = $(this).index();
        //$(".section-7 .wl_container .right_box .text .text_p").eq(index).show().siblings().hide();
    });
    $(".section-9 .w-map .w-map-box .cricle").hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".section-9 .ditu iframe").eq(index).show().siblings().hide();
    });
    $('.bg').hover(function(){
        var index = $(this).index();
        //背景图片
        $('.bg_image').eq(index).stop().transition({opacity: 1,scale: 1},divAnimationTime);
        $('.bg_image').eq(index).siblings().stop().transition({opacity: 0,scale: 1.5},divAnimationTime);

        //字
        $('.text_p').eq(index).stop().transition({opacity:1,y:-20},divAnimationTime);
        $('.text_p').eq(index).siblings().stop().transition({opacity:0,y:20},divAnimationTime);
    },function(){});

        $('#lic').click(function(){
            $('#men').slideToggle();
            var img = $(this).find('img').attr('src');
            if(img == 'imgs/cha.png'){
                $(this).find('img').attr('src', 'imgs/fenlei.png')
            }else{
                $(this).find('img').attr('src', 'imgs/cha.png')
            }
        })
        $('#lick').click(function(){
            $('#men').slideToggle();
            var img = $(this).find('img').attr('src');
            if(img == 'imgs/cha.png'){
                $(this).find('img').attr('src', 'imgs/fenlei.png')
            }else{
                $(this).find('img').attr('src', 'imgs/cha.png')
            }
        })
    $('.section-9 .w-map .w-map-box div').click(function () {
        var index = $(this).index();
        $(this).attr('class',"w-map-on").siblings('div').attr('class',"cricle");
        $('.section-9 .ditu iframe').eq(index).show().siblings('.c-table-box').hide();
    });
    $(document).ready(function(){
        $('.wl-quanwang-container .dianshang li').click(function () {
            var index = $(this).index();
            $(this).attr('class',"active").siblings('.wl-quanwang-container .dianshang li').removeClass('active');
            $('.text_box').eq(index).show().siblings('.text_box').hide();
        });
    })
    $(document).ready(function(){
        $('.wl-shuzi-container .youshi .al div').click(function () {
            var index = $(this).index();
            $(this).attr('class',"shen").siblings('.wl-shuzi-container .youshi .al div').attr('class',"left right");
            $('.wl-shuzi-container .tiyu').eq(index).show().siblings('.wl-shuzi-container .tiyu').hide();
        });
    });
    $(document).ready(function(){
        $('.wl-zhaopin-container .qiehuan .bottom div').click(function () {
            var index = $(this).index();
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
    })

});

$(function(){

 var index=window.location.href.split("/").length-1;
    var href=window.location.href.split("/")[index].substr(0,4);

    if(href>0){
        $(".top .left ul li a[href^='"+href+"']").addClass("oo")
    }else{
        $(".top .left ul li a[href^='index']").addClass("oo")
    }

});
$(function(){
    var inde=window.location.href.split("/").length-1;
    var hre=window.location.href.split("/")[inde].substr(0,4);
    if(href>0){
        $(".top .right a[href^='"+hre+"']").addClass("cc")
    }else{
        $(".top .right a[href^='index']").addClass("cc")
    }

});
