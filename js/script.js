const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector ('.menu'),
      closeElem = document.querySelector ('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const interest = document.querySelectorAll('.skills__interest'),    // Прописываем переменную для класса с Процентами
      grey = document.querySelectorAll('.skills__grey span');       // Прописываем переменную для класса спана(желтой линии)

interest.forEach((item, i) => {
    grey[i].style.width = item.innerHTML;

});

function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        checkbox: {
          required: true,
        }
      },
      messages: {
        name: {
          required:  "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символов")
        },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправельно введён адрес почты"
        },
        checkbox: {
          required: "Подтвердите"
        }
      }
    });
  };

  validateForms('#contacts')

  $('.modal__close').on('click', function() {
    $('.overlay, #thanks').fadeOut('slow');
  });

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.overlay, #thanks').fadeIn('slow');
      
      $('form').trigger('reset');
    });
    return false;
  });

  // $(window).on("scroll", function() {
  //   // Если высота больше 200px 
  //   // Добавляем классу header класс fixed
  //     if ($(window).scrollTop() > 800) $('.hamburger').addClass('scroll');
  //   // Иначе удаляем класс fixed
  //           else $('.hamburger').removeClass('scroll');
  //     });