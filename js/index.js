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
                    $('.words-container').animate({left:"50px",opacity:0},divAnimationTime);
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