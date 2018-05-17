$(document).ready(function() {
    $('a.read').click(function () {
        $(this).siblings('.excerpt').slideToggle(500);
        $(this).siblings('.whole-post').slideToggle(500);
    });
});
