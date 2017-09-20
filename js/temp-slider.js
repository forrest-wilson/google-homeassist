$(document).ready(function() {
    // Print slider value to the innerHTML of the slider label
    var slider = document.getElementById("tempSlider");
    var output = document.getElementById("tempOutput");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
});