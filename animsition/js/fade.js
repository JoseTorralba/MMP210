/* Fade Animation */

$(".animsition").animsition();


/* Scrolls You Back To Top of Page */

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back-top').fadeIn();
    } else {
        $('#back-top').fadeOut();
    }
});

$(document).ready(function() {
    $("#back-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});