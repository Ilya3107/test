const points = document.querySelectorAll(".point");

const changePoint = (el) => {
  el.classList.toggle("active");
  document.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(el);
    if (!withinBoundaries) {
      el.classList.remove("active");
    }
  });
};

points.forEach((point) => {
  point.addEventListener("click", () => {
    changePoint(point);
  });
});
