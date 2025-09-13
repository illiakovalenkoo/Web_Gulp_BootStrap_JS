function slowScroll(id) { 
    $("html, body").animate({
        scrollTop: $(id).offset().top - 50   
    }, 100);
    return false;
}
