let caption = $('.main-caption span');
let captionWidth = caption.width();

caption.each(function(){
    let captionWidth = $(this).width();
    $(this).css('width',`${captionWidth}`)
})

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});