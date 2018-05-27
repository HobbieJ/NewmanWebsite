// Img3
var modal3 = document.getElementById('hallModal');

var img3 = document.getElementById('hallImg');
var modalImg3 = document.getElementById('img3');
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
}

var span3 = document.getElementsByClassName('close')[0];

span3.onclick = function () {
    modal3.style.display = "none";
}