//Smooth Scroll to section
var SmoothScroll = $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// Function define toTop button functionality
var toTop = $(function() {
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
var formAjax = $(document).ready(function(){
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
    //alert("It's LUXURY shop");
    $("#background").fadeIn(400, function () {
      $("#modal")
      .css('display', 'block')
      .animate({opacity: 1, top: '5%'}, 200);
    });
  };
  this.proj2 = function() {
    alert("This project will be added later...");
  };
  this.close = function() {
      $('#modal')
        .animate({opacity: 0, top: '45%'}, 200,
        function () {
        $(this).css('display', 'none');
        $('#background').fadeOut(400); });
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
