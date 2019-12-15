$(document).ready(function(){ 
    $("main").scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }) 
    $('#scroll').click(function(){ 
        $("main").animate({ scrollTop: 0 }, 600); 
        return false; 
    }) 

        
    $('#linksbutton').click(function () {
        $(".links").toggleClass("linkspage");
        $(".T-bottom").toggleClass("linkspage");
    })

});