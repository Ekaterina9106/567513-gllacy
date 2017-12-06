var onSlideClick = function (event) {
    document.querySelector(".slider-controls .active").classList.remove("active");
    event.currentTarget.classList.add("active");
    document.body.setAttribute("class", event.currentTarget.getAttribute("id"));
}

document.getElementById("slide1").addEventListener("click", onSlideClick);
document.getElementById("slide2").addEventListener("click", onSlideClick);
document.getElementById("slide3").addEventListener("click", onSlideClick);

var bgModal = document.getElementById("bgModal");

document.querySelector(".feedback-btn").addEventListener("click", function (event) {
    event.preventDefault();
    bgModal.classList.add("active");
});

bgModal.querySelector(".cross").addEventListener("click", function () {
    bgModal.classList.remove("active");
});