
function clicky(e) {
    "use strict";
    document.getElementById("click").style.border = "none";
    e.preventDefault();
    setTimeout(function () {
        window.location = e.currentTarget.href;
    }, 1000);
    
}
window.onload = function () {
//    document.getElementById("click").addEventListener("click", clicky);
    
    "use strict";
    var navButtons = document.getElementsByClassName("click");
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", clicky);
        
    }
}




























