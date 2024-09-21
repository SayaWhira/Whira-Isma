// <!-- java script Navbar -->
const stickytop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickytop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickytop.style.overflow = "hidden";
});

// <!-- java script section music start -->
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const audioIcon = document.querySelector(".audio-icon-wrapper i");
const music = document.querySelector("#music");
let isPlaying = false;

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}

function playAudio() {
  music.volume = 0.5;
  audioIconWrapper.style.display = "flex";
  music.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    music.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    music.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};
disableScroll();
// <!-- POST goggle sheet section -->

window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi Kehadiran Berhasil Terkirim!");
    });
  });
});

// <!-- POST goggle sheet section end -->
// untuk nama di URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama") || "";
const pronoun = urlParams.get("panggilan") || "Bapak/Ibu/Saudara/i";
const namaContainer = document.querySelector(".hero h4 span");

namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;

// <!-- simplycount down Java Script -->
simplyCountdown(".simply-countdown", {
  year: 2024, // required
  month: 11, // required
  day: 30, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
});
