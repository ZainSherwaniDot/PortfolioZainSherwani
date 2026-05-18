var m = document.querySelector("#main");
var s = document.querySelector("#secondary");
var cvPage1 = document.querySelector("#CVpage1");
var cvPage2 = document.querySelector("#CVpage2");
var cvBtn1 = document.querySelector("#btnPage1");
var cvBtn2 = document.querySelector("#btnPage2");
document.getElementById('CV').addEventListener('click', function() {
    m.style.display="none";
    s.style.display="flex";
});
document.getElementById('gB').addEventListener('click', function() {
    s.style.display="none";
    m.style.display="flex";
    cvPage2.style.display="none";
    cvPage1.style.display="flex";
    cvBtn1.style.display="none";
    cvBtn2.style.display="block";
});
document.getElementById('btnPage1').addEventListener('click', function() {
    cvPage2.style.display="none";
    cvPage1.style.display="flex";
    cvBtn1.style.display="none";
    cvBtn2.style.display="block";
});
document.getElementById('btnPage2').addEventListener('click', function() {
    cvPage1.style.display="none";
    cvPage2.style.display="flex";
    cvBtn1.style.display="block";
    cvBtn2.style.display="none";
});