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
            if(index == 1){
                if(screenWidth<=768){
                    $('.section-1 .text').animate({left:"50%",opacity:1},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    $('.section-1 .text').animate({left:"50%",opacity:1},divAnimationTime);
                }
                else{
                    $('.section-1 .text').animate({left:"50%",opacity:1},divAnimationTime);
                }

            }
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
                }

            }
            if(index == 4){

                if(screenWidth>=1200){
                    var height = $(window).height() ;

                    $('.list-box').animate({left:"-50%",opacity:1},divAnimationTime);
                    $('.boxright').animate({right:"0",opacity:1},divAnimationTime);
                    $('.boxleft').animate({left:"0",opacity:1},divAnimationTime);
                    $('.w-row').animate({height:height+"px",opacity:1},divAnimationTime);
                }
                else if(screenWidth<=768){
                    var height = $('.section-4').height() ;
                    $('.w-container').animate({height:height+"px",opacity:1,top:"0"},divAnimationTime);

                }
                else{
                    var height = $('.section-4').height() ;

                    $('.w-container').animate({height:height+"px",opacity:1,top:"0"},divAnimationTime);

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
            if(index == 6){
                if(screenWidth<=768){
                    $('.w-back-red').animate({height:"80%",bottom:"5%"},divAnimationTime);
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
            if(index == 7){
                if(screenWidth<=768){
                    $('.left_box ').animate({left:"0",opacity:1},divAnimationTime);
                    $('.right_box .text').animate({left:"0",opacity:1},divAnimationTime);
                    $('.right_box .xuanzhuan').animate({right:"0",opacity:1},divAnimationTime);
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
            if(index == 8){
                if(screenWidth<=768){
                    $('.w-backbox').animate({height:"100%",top:"0"},divAnimationTime);

                    $('.w-message-right').animate({marginLeft:"0",opacity:1,width:"100%"},divAnimationTime);
                }
                else if(screenWidth>=1200){
                    $('.w-backbox').animate({height:"100%",top:"0"},divAnimationTime);
                    $('.w-message-left').animate({marginLeft:"49%",opacity:1},divAnimationTime);
                    $('.w-message-line').animate({height:"400px",opacity:1},divAnimationTime);
                    $('.w-message-right').animate({opacity:1},2000);
                }
                else{
                    $('.w-backbox').animate({height:"100%",top:"0"},divAnimationTime);
                    $('.w-message-right').animate({marginLeft:"0",opacity:1},divAnimationTime);

                }


            }

        },



        onLeave: function(index){
            var screenWidth =window.screen.width;
            if(index == 1){
                if(screenWidth>=1200){
                    $('.section-1 .text').animate({left:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.section-1 .text').animate({left:"-50px",opacity:0},divAnimationTime);
                }
            }
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
                    $('.computer').animate({marginRight:"-50px",opacity:0},divAnimationTime);
                }
            }
            if(index == 4){
                if(screenWidth>=1200){
                    /*  $('.bottom-transparent-cover').animate({height:"0px"},divAnimationTime);*/
                    $('.list-box').animate({left:"-60%",opacity:0},divAnimationTime);
                    $('.boxright').animate({right:"-50px",opacity:0},divAnimationTime);
                    $('.boxleft').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.w-row').animate({height:"0px",opacity:0},divAnimationTime);
                }
                else if(screenWidth<=768){
                    $('.w-container').animate({height:"0px",opacity:0, top:"-50px"},divAnimationTime);

                }
                else{
                    $('.w-container').animate({height:"0px",opacity:0, top:"-50px"},divAnimationTime);

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
            if(index == 6){
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
            if(index == 7){
                if(screenWidth>=1200){
                    $('.left_box ').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.right_box').animate({right:"-50px",opacity:0},divAnimationTime);
                }
                else{
                    $('.left_box ').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.right_box .text').animate({left:"-50px",opacity:0},divAnimationTime);
                    $('.right_box .xuanzhuan').animate({right:"-50px",opacity:0},divAnimationTime);
                }
            }
            if(index == 8){
                if(screenWidth>=1200){
                    $('.w-backbox').animate({height:"0px",opcity:0},divAnimationTime);
                    $('.w-message-left').animate({marginLeft:"-100%",opacity:1},divAnimationTime);
                    $('.w-message-line').animate({height:"0",opacity:1},divAnimationTime);
                    $('.w-message-right').animate({opacity:0},divAnimationTime);
                }
                else{
                    $('.w-backbox').animate({height:"0px",opcity:0},divAnimationTime)
                    $('.w-message-right').animate({marginLeft:"-60px",opacity:0},divAnimationTime);
                }
            }
        }
    });


    $(".section-2 .tag-container .tag-container-tags .tag-container-tag").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-2 .tag-container img").eq(index).show().siblings().hide();
        $(".section-2 .words-container .contents").eq(index).show().siblings().hide();
    });
    $(".section-3 .container .computer .list_box .box_b").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-3 .container .computer .img_box .img_img").eq(index).show().siblings().hide();
        $(".section-3 .container .container_text .text_tes").eq(index).show().siblings().hide();
    });
    $(".section-5 .tag-container_2 .tag-container-tags .tag-container-tag").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-5 .tag-container_2 img").eq(index).show().siblings().hide();
        $(".section-5 .words-container_2 .contents").eq(index).show().siblings().hide();
    });
    $(".section-7 .right_box .xuanzhuan li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-7 .wl_container .right_box .text .text_p").eq(index).show().siblings().hide();
    });
    $(".section-9 .w-map .w-map-box .cricle").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index=$(this).index();
        $(".section-9 .ditu iframe").eq(index).show().siblings().hide();
    })
});




