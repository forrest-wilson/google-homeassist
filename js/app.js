$(document).ready(function() {

    ///////////////////
    //// Variables ////
    ///////////////////

    var transitionSpeed = 300;
    
    /////////////////////////
    //// Click Functions ////
    /////////////////////////

    // Sign In Click Functions
    $("#signinButton").click(function() {
        $("#signinOverlay").fadeIn();
    });

    // Closes all overlays using the .closeButton class
    $(".closeButton, .doneButton").click(function() {
        $("#signinOverlay").fadeOut(transitionSpeed);
        $("#heaterOverlay").fadeOut(transitionSpeed);
        $("#smokeAlarmOverlay").fadeOut(transitionSpeed);
        $("#addDeviceOverlay").fadeOut(transitionSpeed);
    });

    // Scene Switching
    $(".action").click(function() {
        $(".action").removeClass("isActiveAction");
        $(this).addClass("isActiveAction");
    });

    // Navigation popout
    $("#hamburgerButton").click(function() {
        $("#mobileNav").toggleClass("isActiveMobileNav");
        $(".line1").toggleClass("isHamburgerPressedLine1");
        $(".line2").toggleClass("isHamburgerPressedLine2");
        $(".line3").toggleClass("isHamburgerPressedLine3");

        if ($(this).hasClass("navOpen")) {
            $(this).removeClass("navOpen");
            $("#mask").fadeOut(transitionSpeed);
        } else {
            $(this).addClass("navOpen");
            $("#mask").fadeIn(transitionSpeed);
        }
    });

    // Navigation dropdown
    $("#tvHamburgerButton").click(function() {
        $("#tvNav").toggleClass("isActiveTVNav");
        $("#main").toggleClass("isActiveTVNavMain");
        $(".line1").toggleClass("isHamburgerPressedLine1");
        $(".line2").toggleClass("isHamburgerPressedLine2");
        $(".line3").toggleClass("isHamburgerPressedLine3");
    });

    // Show heater overlay
    $(".heaterSettings").click(function() {
        $("#heaterOverlay").fadeIn(transitionSpeed);
    });

    // Fade out Heater Overlay
    $("#heaterOverlay .doneButton").click(function() {
        $("#heaterOverlay").fadeOut(transitionSpeed);
    });

    // Show smoke alarm overlay
    $(".smokeAlarmSettings").click(function() {
        $("#smokeAlarmOverlay").fadeIn(transitionSpeed);
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

    // Add device button
    $(".addDeviceButton").click(function() {
        $("#addDeviceOverlay").fadeIn(transitionSpeed);
    });
});