function scrollNav() {
    $("#menu-1 a").click(function() {
        return $(".active").removeClass("active"), $(this).addClass("active"), $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - 75
        }, 300), !1
    })
}
$(document).ready(function() {
    $("#simply-burger").click(function() {
        $(this).toggleClass("open"), $("#a-nav").slideToggle(500)
    })
}), scrollNav(), $(".modal__close").on("click", function() {
    $(".overlay, #thanks").fadeOut("slow")
}),
  $("form").each(function () {
  $(this).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required"
    },
    messages: {
      name: {
        required: "Пожалуйста, введите свое имя",
        minlength: jQuery.validator.format("Введите {0} символа!")
      },
      phone: "Пожалуйста, введите свой номер телефона",
      polity: "Пожалуйста, согласитесь с обработкой персональных данных"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: $(form).attr('action'),
        data: $(form).serialize()
      }).done(function () {
        $(form).find("input").val(""), 
        $(".overlay, #thanks").fadeIn("slow"), 
        $("form").trigger("reset")
      });
      return false;
    }
  });
});

$("input[name=phone]").mask("+7 (999) 999-99-99");