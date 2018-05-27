// Img1
var modal1 = document.getElementById('arrayModal');

var img1 = document.getElementById('arrayImg');
var modalImg1 = document.getElementById('img1');
img1.onclick = function () {
    modal1.style.display = "block";
    modalImg1.src = this.src;
}

var span1 = document.getElementsByClassName('close')[0];

span1.onclick = function () {
    modal1.style.display = "none";
}

// Img2
var modal2 = document.getElementById('simpleModal');

var img2 = document.getElementById('simpleImg');
var modalImg2 = document.getElementById('img2');
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
}

var span2 = document.getElementsByClassName('close')[1];

span2.onclick = function () {
    modal2.style.display = "none";
}