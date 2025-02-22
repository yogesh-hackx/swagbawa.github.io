const header = document.getElementsByTagName("header")[0];
const navbar = document.getElementsByClassName("navbar")[0];
window.onscroll = function () {
  if (window.scrollY > 10 && window.scrollY < 530) {
    header.style.backgroundColor = "black";
    navbar.style.color = "white";
    header.style.boxShadow = "none";
  } else if (window.scrollY > 530) {
    header.style.backgroundColor = "white";
    navbar.style.color = "black";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
  } else {
    header.style.backgroundColor = "transparent";
    navbar.style.color = "white";
    header.style.boxShadow = "none";
  }
};

let input_elements = document.querySelectorAll("input");
let text_area = document.querySelector("textarea");
input_elements.forEach((input_ele) => {
  input_ele.addEventListener("keyup", () => {
    input_ele.setAttribute("value", input_ele.value);
  });
});

text_area.addEventListener("blur", function () {
  if (text_area.value !== "" && !text_area.classList.contains("not-empty")) {
    text_area.classList.add("not-empty");
  } else if (text_area.value === "") {
    text_area.classList.remove("not-empty");
  }
});
const particles = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 7,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
  background: {
    color: "#ECECEC",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

tsParticles.load("tsparticles", particles);
