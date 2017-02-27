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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gICQuZm4uc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuaGlkZSgpLnJlbW92ZUF0dHIoXCJocmVmXCIpO1xyXG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSAhPSBcIjBcIikge1xyXG4gICAgICAkKHRoaXMpLmZhZGVJbihcInNsb3dcIilcclxuICAgIH1cclxuICAgIHZhciBzY3JvbGxEaXYgPSAkKHRoaXMpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA9PSBcIjBcIikge1xyXG4gICAgICAgICQoc2Nyb2xsRGl2KS5mYWRlT3V0KFwic2xvd1wiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoc2Nyb2xsRGl2KS5mYWRlSW4oXCJzbG93XCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgIH0sIFwic2xvd1wiKVxyXG4gICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAkKFwiI3RvVG9wXCIpLnNjcm9sbFRvVG9wKCk7XHJcbn0pO1xyXG5cclxuLypcclxuICBGb3JtIHdpdGggQUpBWFxyXG4qL1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHsgLy9DaGFuZ2VcclxuICB2YXIgdGggPSAkKHRoaXMpO1xyXG4gICQuYWpheCh7XHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIHVybDogXCJzZW5kLnBocFwiLCAvL0NoYW5nZVxyXG4gICAgZGF0YTogdGguc2VyaWFsaXplKClcclxuICB9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgLy8gRG9uZSBGdW5jdGlvbnNcclxuICAgICAgdGgudHJpZ2dlcihcInJlc2V0XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59KTtcclxufSk7XHJcblxyXG4vKlxyXG4gIE15IHdvcmtzLCBtb2RhbCB3aW5kb3dzIG9uIGNsaWNrXHJcbiovXHJcblxyXG5mdW5jdGlvbiBXb3JrcyhlbGVtKSB7XHJcbiAgdGhpcy5sdXh1cnkgPSBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KFwiSXQncyBMVVhVUlkgc2hvcFwiKTtcclxuICB9O1xyXG4gIHRoaXMucHJvajIgPSBmdW5jdGlvbigpIHtcclxuICAgIGFsZXJ0KFwiVGhpcyBwcm9qZWN0IHdpbGwgYmUgYWRkZWQgbGF0ZXIuLi5cIik7XHJcbiAgfTtcclxuICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgZWxlbS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgIHZhciBhY3Rpb24gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdGlvbicpO1xyXG4gICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgc2VsZlthY3Rpb25dKCk7XHJcbiAgICAgIH1cclxuICB9O1xyXG59XHJcbiAgbmV3IFdvcmtzKHdvcmtzKTsiXSwiZmlsZSI6ImluZGV4LmpzIn0=
