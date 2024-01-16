// copyrights year
document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

// sticky header
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// square
function square() {
  let sideLength = document.getElementById("side").value;
  let unit = document.getElementById("unit-square").value;

  if(isNaN(sideLength) || sideLength <= 0) {
    alert('Masukkan panjang sisi yang valid');
   } else {
    let resultArea = parseFloat(sideLength) * parseFloat(sideLength)
    let resultPerimeter= parseFloat(sideLength) * 4
  
    document.getElementById("resultSquareArea").innerHTML = `S = ${sideLength} ${unit} <br><br>L = S x S <br><br> L = ${sideLength} x ${sideLength} <br><br> Hasil Luas Persegi adalah ${resultArea} ${unit}<sup>2</sup>` ;
    document.getElementById("resultSquarePerimeter").innerHTML = `S = ${sideLength} ${unit} <br><br>K = 4 x S <br><br> K = 4 x ${sideLength} <br><br> Hasil Keliling Persegi adalah ${resultPerimeter} ${unit}` ;
  } 
}

// rectangle
function rectangle() {
  let lengthSide = document.getElementById("length").value;
  let lengthUnit = document.getElementById("unitLengthRec").value;
  let widthSide = document.getElementById("width").value;
  let widthUnit = document.getElementById("unitWidthRec").value;

  if(widthUnit !== lengthUnit) {
    alert('Satuan panjang dan lebar harus sama')
  } else if(isNaN(lengthSide) || isNaN(widthSide) || lengthSide <= 0 || widthSide <= 0) {
    alert('Masukkan panjang sisi yang valid');
   } else {
    let resultRecArea = parseFloat(lengthSide) * parseFloat(widthSide)
    let resultRecPerimeter= parseFloat(lengthSide)* 2 + parseFloat(widthSide) * 2
  
    document.getElementById("resultRectangleArea").innerHTML = `P = ${lengthSide} ${lengthUnit} <br><br>l = ${widthSide} ${widthUnit} <br><br> L = P x l <br><br> L = ${lengthSide} x ${widthSide} <br><br> Hasil Luas Persegi Panjang adalah ${resultRecArea} ${lengthUnit}<sup>2</sup>` ;
    document.getElementById("resultRectanglePerimeter").innerHTML = `P = ${lengthSide} ${lengthUnit} <br><br> l = ${widthSide} ${widthUnit} <br><br> K = 2 x P + 2 x l  <br><br> K = 2 x ${lengthSide} + 2 x ${widthSide} <br><br> Hasil Keliling Persegi Panjang adalah ${resultRecPerimeter} ${lengthUnit}` ;
  } 
}

// reset
function resetSquare() {
  document.getElementById("side").value=""
  document.getElementById("resultSquareArea").innerHTML =""
  document.getElementById("resultSquarePerimeter").innerHTML =""
}

function resetRectangle() {
  document.getElementById("length").value=""
  document.getElementById("width").value=""
  document.getElementById("resultRectangleArea").innerHTML =""
  document.getElementById("resultRectanglePerimeter").innerHTML =""
}