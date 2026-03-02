const chips = document.querySelectorAll(".chip");
const car = document.getElementById("car");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    chips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
  });
});

document.getElementById("apply").addEventListener("click", () => {
  const style = document.querySelector(".chip.active").dataset.style;

  if(style === "matte"){
    car.style.filter = "brightness(0.9) contrast(0.9)";
  }

  if(style === "glossy"){
    car.style.filter = "brightness(1.1) contrast(1.2)";
  }

  if(style === "metallic"){
    car.style.filter = "brightness(1.2) contrast(1.3) saturate(1.2)";
  }
});
