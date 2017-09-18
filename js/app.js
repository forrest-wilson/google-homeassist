$(document).ready(function() {
    
    /////////////////////////
    //// Click Functions ////
    /////////////////////////


    // Sign In Click Functions
    $("#signinButton").click(function() {
        $("#overlay").fadeIn(300);
    });

    $("#closeButton").click(function() {
        $("#overlay").fadeOut(300);
    });

    // Scene Switching
    $(".scene").click(function() {
        $(".scene").removeClass("isActiveScene");
        $(this).addClass("isActiveScene");
    });

    // Navigation popout
    $("#hamburgerButton").click(function() {
        $("#mobileNav").toggleClass("isActiveMobileNav");
    });
});