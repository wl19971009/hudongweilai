/**
 * Created by harryliu on 9/10/16.
 */
$(document).ready(function() {
    var divAnimationTime = 700;
    $('#fullpage').fullpage({
        loopBottom: false,
        anchors: ['home', 'consulting', 'develop', 'operation', 'marketing','reputation','about','ask','job','contact'],
        afterLoad: function(anchorLink, index){
            if(index == 1){
                //startAnimate();
                $('.fly-up-div').animate({top:"500px"},divAnimationTime);
            }
        },
        onLeave: function(index){
            if(index == '1'){
                //restoreAnimate();
                $('.fly-up-div').animate({top:"0px"},divAnimationTime);
            }
        }
    });
});