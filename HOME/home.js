// CONTENT *********************************************************************

/* create 19 "sample" items, with random images, and add them to masonry grid */

for (var i = 1; i <= 19; i ++) {

  var item = document.createElement("div");
  item.setAttribute("class", "grid-item");

  item.innerHTML = `

  <div class="container">
  <img src="https://picsum.photos/405/311/?random=` + i + `" alt="random pic" class="image">
  <div class="overlay">
  <div class="text">
  <h2>Full Article</h2>
  <p><span>click to read more</span></p>
  <a href="../SINGLE-POST/single-post.html"><i class="fas fa-chevron-circle-right fa-3x"></i></a>
  </div>
  </div>
  </div>

  `

  var grid = document.getElementById("grid");
  grid.appendChild(item);

}

// MASONRY *********************************************************************

/* wait until all content is ready/loaded, especially images, THEN build grid */

function build() {

  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // element argument can be a selector string
  //   for an individual element
  var msnry = new Masonry( '.grid', {
    // options
  });

}

window.onload = build;

// SIDEBAR *********************************************************************

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
