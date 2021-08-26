var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');

document.addEventListener("keypress", function(){
  var a = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  var c = Math.floor(Math.random()*256);
  var d = Math.random().toPrecision(1);
  var e = Math.floor(Math.random()*256);
  var f = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var h = Math.random().toPrecision(1);
  var i = Math.floor(Math.random()*256);
  var j = Math.floor(Math.random()*256);
  var k = Math.floor(Math.random()*256);
  var l = Math.random().toPrecision(1);
  var m = Math.floor(Math.random()*256);
  var n = Math.floor(Math.random()*256);
  var o = Math.floor(Math.random()*256);
  var p = Math.random().toPrecision(1);
  var q = Math.floor(Math.random()*256);
  var r = Math.floor(Math.random()*256);
  var s = Math.floor(Math.random()*256);
  var t = Math.random().toPrecision(1);

  one.style.background = "rgba("+a+","+b+","+c+","+d+")";
  two.style.background = "rgba("+e+","+f+","+g+","+h+")";
  three.style.background = "rgba("+i+","+j+","+k+","+l+")";
  four.style.background = "rgba("+m+","+n+","+o+","+p+")";
  five.style.background = "rgba("+q+","+r+","+s+","+t+")";

  one.innerHTML = "rgba("+a+","+b+","+c+","+d+")";
  two.innerHTML = "rgba("+e+","+f+","+g+","+h+")";
  three.innerHTML = "rgba("+i+","+j+","+k+","+l+")";
  four.innerHTML = "rgba("+m+","+n+","+o+","+p+")";
  five.innerHTML = "rgba("+q+","+r+","+s+","+t+")";
})
