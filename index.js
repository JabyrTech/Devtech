var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

window.onscroll = function (ev) {
  if (window.scrollY == 0) {
    document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    document.getElementById("nav").style.backgroundColor = "black";
  }
};

function myFunc() {
  var p = document.getElementById("main");
  var q = document.getElementById("navlink2");
  var g = document.getElementById("navi");

  if (p.style.display === "block") {
    q.style.display = "block";
    p.style.display = "none";
    g.style.background = "rgb(47, 79, 79)";
  } else {
    q.style.display = "none";
    p.style.display = "block";
    g.style.background = "rgba(0, 0, 0, 0.6)";
  }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myF() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

document.getElementById("foot1").innerHTML =
  "&copy;  " + new Date().getFullYear() + " All rights reserved. - DevTech";
