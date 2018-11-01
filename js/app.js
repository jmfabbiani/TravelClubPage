$(window).scroll(function(){
        if($(this).scrollTop() > 40){
          $('#js_up').addClass('open');
          $('#js_up').removeClass('close');
          $('#js_up').removeAttr('style');
        }else{
          $('#js_up').addClass('close');
          $('#js_up').removeClass('open');
          setTimeout(function(){
            $('#js_up').css('display', 'none');
          }, 500);
        }
      });
      $("#js_up").on('click', function (e) {
        e.preventDefault();
          $("body,html").animate({
          scrollTop: 0
        },1000);
        return false;
      });
