$(document).ready(function() {
    
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    // Sign In Click Functions
    $("#signinButton").click(function() {
        $("#signinOverlay").fadeIn(300);
    });

    $("#closeButton").click(function() {
        $("#signinOverlay").fadeOut(300);
        $("#heaterOverlay").fadeOut(300);
    });

    // Scene Switching
    $(".scene").click(function() {
        $(".scene").removeClass("isActiveScene");
        $(this).addClass("isActiveScene");
    });

    // Navigation popout
    $("#hamburgerButton").click(function() {
        $("#mobileNav").toggleClass("isActiveMobileNav");
        $(".line1").toggleClass("isHamburgerPressedLine1");
        $(".line2").toggleClass("isHamburgerPressedLine2");
        $(".line3").toggleClass("isHamburgerPressedLine3");
    });

    // Toggle On/Off of devices
    $(".device .switch").click(function() {
        $(this).parent().toggleClass("isOnDevice");
        $(this).toggleClass("isOnSwitch");
    });

    // Print slider value to the innerHTML of the slider label
    var slider = document.getElementById("tempSlider");
    var output = document.getElementById("tempOutput");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
});