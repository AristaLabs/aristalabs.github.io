(function () {
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
})();
