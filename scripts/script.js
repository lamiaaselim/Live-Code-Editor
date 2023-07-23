// // Live Code Eeditor

var j=0;
//Function for live Rendering
function update(i) {
    if(i==0){
    let htmlCode=document.getElementById("htmlCode").value;
    let cssCode=document.getElementById("cssCode").value;
    let javascriptCode=document.getElementById("javascriptCode").value;
    let text=htmlCode+"<style>"+cssCode+"</style>"+"<scri"+"pt>"+javascriptCode+"</scri"+"pt>";
    let iframe=document.getElementById('viewer').contentWindow.document;
    iframe.open();
    iframe.write(text);
    iframe.close();
    }

    else if(i==1){

        let htmlCode=document.getElementById("htmlCode").value;
        let html=htmlCode.slice(0,htmlCode.length);
        document.getElementById("htmlCode").value=html;
        j=1;

    }
}


// // Nice Scrolling
// $(document).ready(function () {
// 	"use strict";
// $("html").niceScroll({
//     cursorcolor:"#140606",
// 	cursorwidth:"12px",
// 	cursorborder:"#E41B17 solid 2px"
// });
// });