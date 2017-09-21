function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

if (localStorage.getItem("switches") !== null) {
    var Storage = JSON.parse(localStorage.getItem("switches"));
    for (var i = 0; i < Storage.length; i++) {
        if(Storage[i]['active'] === 'true' ){
            var SwitchID = Storage[i]['switch'];
            var SwitchExists = document.getElementById(SwitchID);
            if(SwitchExists !== null){
                SwitchExists.checked = true;
                var parent = SwitchExists.parentElement.parentElement;
                addClass(parent, "isOnDevice");
            }
        }
    };
}