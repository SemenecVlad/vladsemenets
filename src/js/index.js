$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() != "0") {
      $(this).fadeIn("slow")
    }
    var scrollDiv = $(this);
    $(window).scroll(function() {
      if ($(window).scrollTop() == "0") {
        $(scrollDiv).fadeOut("slow")
      } else {
        $(scrollDiv).fadeIn("slow")
      }
    });
    $(this).click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, "slow")
    })
  }
});

$(function() {
  $("#toTop").scrollToTop();
});

/*
  Form with AJAX
*/
$(document).ready(function(){
  $("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "send.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});
});

/*
  My works, modal windows on click
*/

function Works(elem) {
  this.luxury = function() {
    alert("It's LUXURY shop");
  };
  this.proj2 = function() {
    alert("This project will be added later...");
  };
  var self = this;

    elem.onclick = function(e) {
      var target = e.target;
      var action = target.getAttribute('data-action');
      if (action) {
        self[action]();
      }
  };
}
  new Works(works);
