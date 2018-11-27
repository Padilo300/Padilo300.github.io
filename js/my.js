$(document).ready(function () {

    

    var mql = window.matchMedia('all and (max-width: 1199px)');
    if (mql.matches) {
        $("[data-transform='container-fluid']").removeClass('container').addClass('container-fluid');
    }
    var mql = window.matchMedia('all and (min-width: 479px)');
    if (mql.matches) {
        $("#filter_mobile").remove()
    }
    
    $('.titleScroll p a').on('click',function(){
      var link = $(this).attr('data-Text');
      console.log(link);
      $('.textContainer p').hide(200);
      $('#'+link).show(300);
    });





    $("#SendMail").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/php/sendMail.php",
            data: form_data,
            success: function () {
                $('#modalFuncYou').modal('show');
                $('#SendMail').trigger('reset');
            },
            error: function (data) {
                console.log(data);
            }
        });
       
        return false;
    });


    $('.titleScroll > p').on('click', function(){
      $('.titleScroll > p').removeClass('active');
      $(this).addClass('active');
    });

    // откроет меню
    function openNav(){
        $('.mobilBar').toggleClass("openNav");
        $('#nav').toggleClass('showNav');
        $('.mobilBar').toggleClass('showNavBtn');
    }

    $('.mobilBar').on('click',function(){
        openNav();
    });

    

  });