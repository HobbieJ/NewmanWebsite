// Img6
var modal6 = document.getElementById('phpModal');

var img6 = document.getElementById('phpImg');
var modalImg6 = document.getElementById('img6');
img6.onclick = function() {
    modal6.style.display = "block";
    modalImg6.src = this.src;
}

var span6 = document.getElementsByClassName('close')[0];

span6.onclick = function() {
    modal6.style.display = "none";
}

// Img7
var modal7 = document.getElementById('designModal');

var img7 = document.getElementById('designImg');
var modalImg7 = document.getElementById('img7');
img7.onclick = function () {
    modal7.style.display = "block";
    modalImg7.src = this.src;
}

var span7 = document.getElementsByClassName('close')[1];

span7.onclick = function () {
    modal7.style.display = "none";
}