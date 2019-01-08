function printMsg() {

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
var node2 = document.getElementById("write2");
    node2.innerHTML = '&#8984;-Shift-F';
var node = document.getElementById("write1");
    node.innerHTML = '&#8984;-Shift-F';
} else {

 var node2 = document.getElementById("write2");
    node2.innerHTML = 'F11';
 var node = document.getElementById("write1");
    node.innerHTML = 'F11';
}
}

function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
}