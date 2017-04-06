//Youtube-style loader on top =================================================
$().ready(function(){
        var images_count = $('img').length; // quantity of images on a page
        var percent = images_count / 100; // percent part of one image
        var loading_progress = 0; // current progress
        var images_ready = 0; // images loaded
        if (images_count > 0){ // if images existed
                $('body').append('<div id="top_progess_bar"> </div>'); // adding mark-up for progress bar
                $('#top_progess_bar') // setting up styles for progress bar
                                .css('position', 'fixed')
                                .css('top', 0)
                                .css('left', 0)
                                .css('width', '0%')
                                .css('height', '4px')
                                .css('background-color', 'red')
                                .css('z-index', 100000);
        }//if

        $('img').load(function(){ // when image is loaded
                images_ready++; // increase counter of loaded images
                loading_progress += percent; // increase percents
                if(loading_progress >= 100){ // if all images are loaded
                        $('#top_progess_bar').remove(); // remove progress bar
                }//
                $('#top_progess_bar').css('width', loading_progress + '%'); // setting up size of progress bar in percents
        });

        $(window).load(function(){ // when page is loaded
                $('#top_progess_bar').remove(); // remove progress bar
        });
});
//End Youtube-style loader=================================================

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

//=============================

$('#hire-btn').on('click', function(){
  alert('The fastest way to contact me is send me a message on : semenecvlad@mail.ru .
Website is currently under development and some features are not working at the moment.
Sorry for the temporary inconvenience');
});
