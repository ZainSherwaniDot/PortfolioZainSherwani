var m = document.querySelector("#main");
var s = document.querySelector("#secondary");
document.getElementById('CV').addEventListener('click', function() {
    m.style.display="none";
    s.style.display="flex";
});
document.getElementById('gB').addEventListener('click', function() {
    s.style.display="none";
    m.style.display="flex";
});