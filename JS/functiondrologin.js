function dropLogin() {
    document.getElementById("dropLogin").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.login')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-login");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
