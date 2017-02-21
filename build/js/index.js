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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xyXG4gICQuZm4uc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbigpIHtcclxuICAgICQodGhpcykuaGlkZSgpLnJlbW92ZUF0dHIoXCJocmVmXCIpO1xyXG4gICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSAhPSBcIjBcIikge1xyXG4gICAgICAkKHRoaXMpLmZhZGVJbihcInNsb3dcIilcclxuICAgIH1cclxuICAgIHZhciBzY3JvbGxEaXYgPSAkKHRoaXMpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA9PSBcIjBcIikge1xyXG4gICAgICAgICQoc2Nyb2xsRGl2KS5mYWRlT3V0KFwic2xvd1wiKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoc2Nyb2xsRGl2KS5mYWRlSW4oXCJzbG93XCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgIH0sIFwic2xvd1wiKVxyXG4gICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAkKFwiI3RvVG9wXCIpLnNjcm9sbFRvVG9wKCk7XHJcbn0pOyJdLCJmaWxlIjoiaW5kZXguanMifQ==
