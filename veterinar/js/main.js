$(document).ready(function() {

    $(document).on('click', '.faq-item', function(){
        $(this).toggleClass('active');
        if(this.classList.contains("active")) {
            $(this).find('.answer').slideDown("fast");
        }
        else {
            $(this).find('.answer').slideUp("fast");
        }
    });

    $(".toggle_menu").click(function() {
        $(".sandwich").toggleClass("active");
        if($('.sandwich').hasClass('active'))
        {
            $('.main-header .mobile-menu-content').animate({'left': 0});
        }
        else
        {
            $('.main-header .mobile-menu-content').animate({'left': '-200%'});
        }
    });

    $('.dropbtn').click(function () {
        $(this).toggleClass('active');
  
        if(!$(this).hasClass('active')) {
          $(this).next().slideUp('fast');
        }
        else {
          $(this).next().slideDown('fast');
        }
      });


    $(document).on('click', '.mobile-nav-list li a', function(){
        if(!$(".sandwich").hasClass('active') )
            event.preventDefault();
        else
        {
            $('.sandwich').trigger('click');
        }
    });
    $(window).on('scroll', setFixedHeader);
    function setFixedHeader()
    {
        var height = $('header').height();
        if ( $(window).scrollTop() > height ) {
            $('.main-header').addClass('fixed');
        }
        else {
            $('.main-header').removeClass('fixed');
        }
    }
});

function setCaretPosition(ctrl, pos, endpos) {
    endpos = endpos || pos;
    // Modern browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, endpos);

    // IE8 and below
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', endpos);
        range.moveStart('character', pos);
        range.select();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
  });
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }