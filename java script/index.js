
function clicky() {
    "use strict";
    document.getElementById("click").style.border.color = "white";
}
document.getElementById("click").addEventListener("focus", clicky);