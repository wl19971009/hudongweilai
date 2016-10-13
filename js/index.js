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
                    var winH = $(window).height();
                    $('pc_box').animate({height:winH+"px",opacity:1},divAnimationTime);
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
                    var winH = $(window).height();
                    $('.pc_box').animate({height:winH+"px",opacity:1},divAnimationTime);
                    $('.computer').animate({left:"0",opacity:1},divAnimationTime);
                    $('.text_t').animate({left:"5%",opacity:1},divAnimationTime);
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
                    $('.pc_box').animate({height:"0",opacity:1},divAnimationTime);
                    $('.computer').animate({left:"50px",opacity:0},divAnimationTime);
                    $('.text_t').animate({left:"-50px",opacity:0},divAnimationTime);

                }
                else if(screenWidth<=768){
                    $('.pc_box').animate({height:"0",opacity:1},divAnimationTime);
                    $('.text_t').animate({marginLeft:"-50px",opacity:0},divAnimationTime);
                    $('.list_box').animate({marginRight:"0",opacity:0},divAnimationTime);
                }
                else{
                    $('.pc_box').animate({height:'0',opacity:1},divAnimationTime);
                    $('.computer').animate({left:"50px",opacity:0},divAnimationTime);
                    $('.text_t').animate({left:"-50px",opacity:0},divAnimationTime);
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
});




