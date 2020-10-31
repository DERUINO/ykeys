$(document).ready(function () {
    $('.mobile_openmenu').click(function () {
        $('.mobile_menu').slideDown();
    });

    $('.close_menu').click(function() {
        $('.mobile_menu').slideUp();
    })

    $('.accept_phone').click(function () {
        $('.alert_text').html('<span class="red_bold">Спасибо</span>, что оставили<br>Ваш номер телефона!<br><br>Наш менеджер свяжется с Вами<br>в течении ближайшего часа');
        $('.alertblock').css('display', 'flex');
    });

    $('.accept_form').click(function () {
        $('.alert_text').html('<span class="red_bold">Спасибо</span>, что оставили заявку!<br><br>Наш менеджер свяжется с Вами<br>в течении ближайшего часа');
        $('.alertblock').css('display', 'flex');
    });

    $('.close_alert').click(function () {
        $('.alertblock').fadeOut(300);
    });
});