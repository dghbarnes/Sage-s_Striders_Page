
function clicky() {
    document.getElementById("click").addEventListener("focus", clicky);
    document.getElementById("click").style.border = "none";
}