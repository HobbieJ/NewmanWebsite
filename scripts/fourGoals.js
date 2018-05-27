// Img4
var modal4 = document.getElementById('hardwareModal');

var img4 = document.getElementById('hardwareImg');
var modalImg4 = document.getElementById('img4');
img4.onclick = function() {
    modal4.style.display = "block";
    modalImg4.src = this.src;
}

var span4 = document.getElementsByClassName('close')[0];

span4.onclick = function() {
    modal4.style.display = "none";
}

// Img5
var modal5 = document.getElementById('networkModal');

var img5 = document.getElementById('networkImg');
var modalImg5 = document.getElementById('img5');
img5.onclick = function() {
    modal5.style.display = "block";
    modalImg5.src = this.src;
}

var span5 = document.getElementsByClassName('close')[1];

span5.onclick = function() {
    modal5.style.display = "none";
}