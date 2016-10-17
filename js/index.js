/**
 * Created by harryliu on 9/10/16.
 */
$(document).ready(function() {
    var divAnimationTime = 700;
    $('#fullpage').fullpage({
        loopBottom: false,
        anchors: ['home', 'consulting', 'develop', 'operation', 'marketing','reputation','about','ask','job','contact'],
        afterLoad: function(anchorLink, index){
            var screenWidth =window.screen.width;
            if(index == 2){
                if(screenWidth<=768){
                    $('.bottom-transparent-cover').animate({height:"75%"},divAnimationTime);
                    $('.tag-container').animate({left:"0",opacity:1},divAnimationTime);
                    $('.words-container').animate({left:"0",opacity:1},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    $('.bottom-transparent-cover').animate({height:"50%"},divAnimationTime);
                    $('.tag-container').animate({left:"0",opacity:1},divAnimationTime);
                    $('.words-container').animate({right:"0",opacity:1},divAnimationTime);
                }
                else{
                    $('.bottom-transparent-cover').animate({height:"50%"},divAnimationTime);
                    $('.tag-container').animate({left:"0",opacity:1},divAnimationTime);
                    $('.words-container').animate({left:"0",opacity:1},divAnimationTime);
                }

            }
            if(index == 3){
                if(screenWidth<=768){
                    $('.computer').animate({left:"0",opacity:1},divAnimationTime);
                    $('.text_t').animate({marginLeft:"0",opacity:1},divAnimationTime);
                    $('.list_box').animate({marginRight:"0",opacity:1},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    var winH = $(window).height();
                    $('.pc_box').animate({height:winH+"px",opacity:1},divAnimationTime);
                    $('.computer').animate({left:"0",opacity:1},divAnimationTime);
                    $('.text_t').animate({left:"5%",opacity:1},divAnimationTime);
                }
                else{
                    $('.computer').animate({left:"0",opacity:1},divAnimationTime);
                    $('.text_t').animate({marginLeft:"0",opacity:1},divAnimationTime);
                    $('.list_box').animate({marginRight:"0",opacity:1},divAnimationTime);
                }

            }
            if(index == 5){
                if(screenWidth<=768){
                    $('.bottom-transparent-cover').animate({height:"75%"},divAnimationTime);
                    $('.tag-container_2').animate({right:"0",opacity:1},divAnimationTime);
                    $('.words-container_2').animate({left:"0",opacity:1},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    $('.bottom-transparent-cover').animate({height:"50%"},divAnimationTime);
                    $('.tag-container_2').animate({right:"0",opacity:1},divAnimationTime);
                    $('.words-container_2').animate({left:"0",opacity:1},divAnimationTime);
                }
                else{
                    $('.bottom-transparent-cover').animate({height:"50%"},divAnimationTime);
                    $('.tag-container_2').animate({right:"0",opacity:1},divAnimationTime);
                    $('.words-container_2').animate({left:"0",opacity:1},divAnimationTime);
                }

            }
            if(index == 7){
                if(screenWidth<=768){
                    $('.right_box').animate({marginRight:"0",opacity:1},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    $('.left_box').animate({left:"0",opacity:1},divAnimationTime);
                    $('.right_box').animate({right:"0",opacity:1},divAnimationTime);
                }
                else{
                    $('.left_box ').animate({marginLeft:"0",opacity:1},divAnimationTime);
                    $('.right_box').animate({marginRight:"0",opacity:1},divAnimationTime);
                }

            }


        },



        onLeave: function(index){
            var screenWidth =window.screen.width;
            if(index == 2){
                if(screenWidth>=1200){
                    $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);
                    $('.tag-container').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.words-container').animate({right:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);
                    $('.tag-container').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.words-container').animate({right:"-50px",opacity:0},divAnimationTime);
                }
            }
            if(index == 3){
                if(screenWidth>=1200){
                    $('.pc_box').animate({height:"0",opacity:0},divAnimationTime);
                    $('.computer').animate({left:"50px",opacity:0},divAnimationTime);
                    $('.text_t').animate({left:"-50px",opacity:0},divAnimationTime);

                }
                else if(screenWidth<=768){
                    $('.text_t').animate({marginLeft:"-50px",opacity:0},divAnimationTime);
                    $('.list_box').animate({marginRight:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.text_t').animate({marginLeft:"-50px",opacity:0},divAnimationTime);
                    $('.list_box').animate({marginRight:"-50px",opacity:0},divAnimationTime);
                }
            }
            if(index == 5){
                if(screenWidth>=1200){
                    $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);
                    $('.tag-container_2').animate({right:"-50px",opacity:0},divAnimationTime);
                    $('.words-container_2').animate({left:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);
                    $('.tag-container_2').animate({right:"-50px",opacity:0},divAnimationTime);
                    $('.words-container_2').animate({left:"-50px",opacity:0},divAnimationTime);
                }
            }
            if(index == 7){
                if(screenWidth>=1200){
                    $('.left_box ').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.right_box').animate({right:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.left_box ').animate({marginLeft:"-50px",opacity:0},divAnimationTime);
                    $('.right_box').animate({marginRight:"-50px",opacity:0},divAnimationTime);
                }
            }

        }
    });


    $(".section-2 .tag-container .tag-container-tags .tag-container-tag").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-2 .tag-container img").eq(index).show().siblings().hide();
        $(".section-2 .words-container .contents").eq(index).show().siblings().hide();
    })
    $(".section-3 .container .computer .list_box .box_b").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-3 .container .computer .img_box .img_img").eq(index).show().siblings().hide();
        $(".section-3 .container .container_text .text_tes").eq(index).show().siblings().hide();
    })
    $(".section-5 .tag-container .tag-container-tags .tag-container-tag").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-5 .tag-container img").eq(index).show().siblings().hide();
        $(".section-5 .words-container .contents").eq(index).show().siblings().hide();
    })
});




