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
