
const form = document.querySelector(".placenum form");
const overlay = document.getElementById("alertOverlay");
const closeBtn = document.getElementById("closeAlert");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
    overlay.classList.add("hidden");
    
});
