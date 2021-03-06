
function pageChange(filename) {
  $("#maincontent").load(filename);
  $('.navbar-collapse').addClass('collapse');
  $('.navbar-collapse').removeClass('show');

  //animated scroll to the main content container
  //so the user can read the content they just selected
  $('html,body').animate({scrollTop: $('#maincontent').offset().top}, 'slow');
}

function syncToHash() {
  var hash = location.hash.replace('#','');
  if (hash === "aboutada") {
    pageChange("aboutada.html")
  } else if (hash === "testimonials") {
    pageChange("testimonials.html");
  } else if (hash === "services") {
    pageChange("services.html");
  } else if (hash === "workshops") {
    pageChange("workshops.html");
  } else if (hash === "nl") {
    pageChange("nl.html");
  } else if (hash === "butterfly") {
    pageChange("like-a-butterfly.html");
  } else if (hash === "book-list") {
    pageChange("book-list.html");
  } else if (hash === "links") {
    pageChange("links.html");
  } else {
    pageChange("aboutada.html")
  }
}

$(document).ready(function()
{
  syncToHash();

  $(window).bind('hashchange',function(event){
    syncToHash();
  });

});
