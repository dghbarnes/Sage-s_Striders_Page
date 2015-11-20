
function clicky(e) {
    "use strict";
    //document.getElementsByClassName("click").style.border = "none";
    e.preventDefault();
    e.currentTarget.style.border = "solid .25em #EBBE2D";
    e.currentTarget.style.borderRadius = "1.25em";
    setTimeout(function () {
        window.location = e.target.href;
    }, 250);
    
}
window.onload = function () {
//    document.getElementById("click").addEventListener("click", clicky);
    
    "use strict";
    var navButtons = document.getElementsByClassName("click");
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", clicky);
        
    }
}




























