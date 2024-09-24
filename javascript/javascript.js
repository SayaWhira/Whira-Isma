// <!-- java script Navbar -->
const stickytop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");
offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickytop.style.overflow = "visible";
});
offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickytop.style.overflow = "hidden";
});
// java script Navbar End//

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

  document.querySelector(".hero").classList.add("lift");

  setTimeout(function () {
    document.querySelector(".hero").classList.add("hero-hidden");
  }, 2000);

  document.getElementById("quran").classList.add("animate");
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
// text quran//
document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk memicu animasi ketika elemen quran masuk ke viewport
  let observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing setelah animasi berjalan
        }
      });
    },
    {
      threshold: 0.0, // Bagian elemen yang harus terlihat (50% dari tinggi elemen) sebelum animasi dimulai
    }
  );

  // Targetkan section #quran
  let quranSection = document.getElementById("quran");
  observer.observe(quranSection); // Mulai memantau section quran
});

document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. QS: Ar-Rum Ayat 21";
  const container = document.querySelector(".ayat");
  container.innerHTML = ""; // Kosongkan konten awal

  let index = 0;

  function type() {
    if (index < text.length) {
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 30); // Atur kecepatan munculnya huruf (ms)
    } else {
      container.classList.add("animate"); // Tambahkan kelas animasi setelah semua huruf muncul
    }
  }

  type(); // Mulai animasi
});

// Select all nav links inside the offcanvas
const navLinks = document.querySelectorAll(".offcanvas-body .nav-link");
const offcanvasElement = document.getElementById("offcanvasNavbar");

// Function to close the offcanvas
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the offcanvas when any link is clicked
    bsOffcanvas.hide();
  });
});
