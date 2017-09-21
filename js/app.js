$(document).ready(function() {
    
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    // Sign In Click Functions
    $("#signinButton").click(function() {
        $("#signinOverlay").fadeIn(300);
    });

    // Closes all overlays using the .closeButton class
    $(".closeButton").click(function() {
        $("#signinOverlay").fadeOut(300);
        $("#heaterOverlay").fadeOut(300);
        $("#smokeAlarmOverlay").fadeOut(300);
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

    // Show heater overlay
    $(".heaterSettings").click(function() {
        $("#heaterOverlay").fadeIn(300);
    });

    // Fade out Heater Overlay
    $("#heaterOverlay .doneButton").click(function() {
        $("#heaterOverlay").fadeOut(300);
    });

    // Show smoke alarm overlay
    $(".smokeAlarmSettings").click(function() {
        $("#smokeAlarmOverlay").fadeIn(300);
    });

    // Test alarm button
    $(".testAlarmButton").click(function() {
        $(this).hide();
        $(".testingAlarmButton").show();
    });

    $(".testingAlarmButton").click(function() {
        $(this).hide();
        $(".testAlarmButton").show();
    });

    // Show more Devices event
    $(".showMoreButton").click(function() {
        $(this).hide();
        $(this).parent().find(".toggleableDevices").show();
    });

    // Hide Devices event
    $(".showLessButton").click(function() {
        $(this).parent().hide();
        $(this).parent().parent().find(".showMoreButton").show();
    });
});