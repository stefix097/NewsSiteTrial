/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  var i=0;
  function read() {
    if(!i) {
      document.getElementById("more").style.
        display = "inline";
        document.getElementById("dots").style.
        display = "none";
        document.getElementById("read").innerHTML=
        "Read less";
        i=1;
    }
    else {
      document.getElementById("more").style.
      display = "none";
      document.getElementById("dots").style.
      display = "inline";
      document.getElementById("read").innerHTML=
      "Read more";
      i=0;
    }
  }

  var i=0;
function read2() {
  if(!i) {
    document.getElementById("more2").style.
      display = "inline";
      document.getElementById("dots2").style.
      display = "none";
      document.getElementById("read2").innerHTML=
      "Read less";
      i=1;
  }
  else {
    document.getElementById("more2").style.
    display = "none";
    document.getElementById("dots2").style.
    display = "inline";
    document.getElementById("read2").innerHTML=
    "Read more";
    i=0;
  }
}

var i=0;
function read3() {
  if(!i) {
    document.getElementById("more3").style.
      display = "inline";
      document.getElementById("dots3").style.
      display = "none";
      document.getElementById("read3").innerHTML=
      "Read less";
      i=1;
  }
  else {
    document.getElementById("more3").style.
    display = "none";
    document.getElementById("dots3").style.
    display = "inline";
    document.getElementById("read3").innerHTML=
    "Read more";
    i=0;
  }
}

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
document.getElementById("datetime2").innerHTML = dt.toLocaleString();
