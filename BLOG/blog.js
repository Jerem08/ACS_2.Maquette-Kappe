// external js: isotope.pkgd.js

$('.grid').isotope({
  itemSelector: '.grid-item',
  masonry: {
    columnWidth: 20
  }
});

// sidebar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// When the user clicks on div, open the popup

$(".popup").click(function(){
  $("#myPopup").addClass("show");
});
$(".popup").hover("",function(){
  $("#myPopup").removeClass("show");
});

$(".but-all").click(function() {
  $(".grid-item").css("display", "flex");
  $('.grid').isotope({
    itemSelector: '.grid-item'
  });
});



$(".but-gallery").click(function() {
  $(".grid-item").css("display", "flex")
  $(".standard").css("display", "none")
  $(".player").css("display", "none")
  $(".simple").css("display", "none")
  $(".aside").css("display", "none")
  $('.grid').isotope({
    itemSelector: '.grid-item'
  });
});


$(".but-player").click(function() {
  $(".grid-item").css("display", "flex")
  $(".standard").css("display", "none")
  $(".simple").css("display", "none")
  $(".picture").css("display", "none")
  $(".aside").css("display", "none")
  $('.grid').isotope({
    itemSelector: '.grid-item'
  });
});


$(".but-standard").click(function() {
  $(".grid-item").css("display", "flex")
  $(".simple").css("display", "none")
  $(".picture").css("display", "none")
  $(".aside").css("display", "none")
  $('.grid').isotope({
    itemSelector: '.grid-item'
  });
});

// Add active class to the current button (highlight it)
var header = document.getElementById("filter-box");
var btns = header.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
