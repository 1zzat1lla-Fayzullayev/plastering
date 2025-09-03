const mobileNav = document.querySelector(".mobileNav");
const navLinks = document.querySelectorAll(".mobileNav a");

function toggleMenu(hamburger) {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  });
});

// Asosiy swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper .swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Qo‘shimcha swiper #1
const swiperSingle1 = new Swiper(".swiperSingle1", {
  slidesPerView: 1,
  loop: false,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiperSingle1 .swiper-button-next",
    prevEl: ".swiperSingle1 .swiper-button-prev",
  },
});

// Qo‘shimcha swiper #2
const swiperSingle2 = new Swiper(".swiperSingle2", {
  slidesPerView: 1,
  loop: false,
  watchOverflow: true,
  navigation: {
    nextEl: ".swiperSingle2 .swiper-button-next",
    prevEl: ".swiperSingle2 .swiper-button-prev",
  },
});

// Отзывы swiper
const reviewsSwiper = new Swiper(".reviewsSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  watchOverflow: true, 

  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// modal
document.addEventListener("DOMContentLoaded", () => {
  const modalBg = document.querySelector(".modal_bgg");
  const closeModal = document.querySelector(".modal .close");

  const modalButtons = document.querySelectorAll(
    ".call_btn, .mobile_call_btn, .step-btn, .advantages button, .about_us button, .header_text button"
  );

  modalButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalBg.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", () => {
    modalBg.classList.remove("active");
    document.body.style.overflow = "";
  });

  modalBg.addEventListener("click", (e) => {
    if (e.target === modalBg) {
      modalBg.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
