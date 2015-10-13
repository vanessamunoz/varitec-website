'use strict';

//resize any element with the given class
function fullscreen(name) {
    $(name).addClass('fullscreen');
    $('.fullscreen').css({
        width: $(window).width(),
        height: $(window).height()
    });
}

//Listen to Window Resize
var $resize = $(window).resize(function () { if (!isMobile()) fullscreen(null); });

function isMobile() {return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)); }

sliceExtension();
function sliceExtension(){
    var myURL=window.location.href;
    if (myURL.lastIndexOf(".html") > 0){
        //remove fragment as much as it can go without adding an entry in browser history:
        window.location.replace("#");
        //slice off the remaining '#' in HTML5:    
        if (typeof window.history.replaceState == 'function') {
            history.replaceState({}, '', window.location.href.slice(0, myURL.lastIndexOf(".")));
        }
        if (myURL.lastIndexOf("index") > 0){
            history.replaceState({}, '', window.location.href.slice(0, myURL.lastIndexOf("index")));
        }
    }
}