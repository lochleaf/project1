
/*selects the form inside placenum section*/
const form = document.querySelector(".placenum form");
/*selects alert overlay background*/
const overlay = document.getElementById("alertOverlay");
/*selects close button inside alert box*/
const closeBtn = document.getElementById("closeAlert");

/*listens for form submission*/
form.addEventListener("submit", function (event) {
    /*stops page from refreshing*/
    event.preventDefault();
    /*shows alert overlay*/
    overlay.classList.remove("hidden");
});

/*click on close button*/
closeBtn.addEventListener("click", function () {
    /*hides alert overlay*/
    overlay.classList.add("hidden");
    
});
