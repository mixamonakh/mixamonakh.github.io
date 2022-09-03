$(".modal__close").on("click", function() {
    $(".overlay, #thanks").fadeOut("slow")
}),
  $("form").each(function () {
  $(this).validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      polity: "required"
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