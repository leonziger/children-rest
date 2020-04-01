import $ from 'jquery';

$('.choose-ticket__tab').each(function() {

    $('.choose-ticket__tab').click(function() {
        $(this).addClass('active-tab').siblings().removeClass('active-tab');
        $('.choose-ticket__camps').eq($(this).index()).addClass('active-content').siblings().removeClass('active-content');
    }).first().click();
});