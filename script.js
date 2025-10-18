const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let cursorBlurX = 0;
let cursorBlurY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  cursorBlurX += (mouseX - 200 - cursorBlurX) * 0.08;
  cursorBlurY += (mouseY - 200 - cursorBlurY) * 0.08;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  cursorBlur.style.left = cursorBlurX + "px";
  cursorBlur.style.top = cursorBlurY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

const navItems = document.querySelectorAll(".nav-links h4");
navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(3)";
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "2px solid #d4a574";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "#d4a574";
    cursor.style.border = "none";
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(4)";
    cursor.style.backgroundColor = "rgba(212, 165, 116, 0.4)";
    cursor.style.mixBlendMode = "normal";
  });

  card.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "#d4a574";
    cursor.style.mixBlendMode = "difference";
  });
});

const coffeeItems = document.querySelectorAll(".elem");
coffeeItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(4)";
    cursor.style.backgroundColor = "rgba(212, 165, 116, 0.4)";
  });

  item.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "#d4a574";
  });
});

const nav = document.querySelector("#nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "auto";
});

const mobileMenuItems = document.querySelectorAll(".mobile-menu h4");
mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const arrow = document.querySelector("#arrow");
arrow.addEventListener("click", () => {
  document.querySelector("#page2").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Ensure all animated elements are visible by default (fallback)
document.querySelectorAll('.card, .elem, #about-us .about-img, #about-us-in').forEach(el => {
  el.style.opacity = '1';
  el.style.visibility = 'visible';
});

// Navbar animation on scroll
gsap.to("#nav", {
  backgroundColor: "rgba(10, 10, 10, 0.98)",
  height: "85px",
  duration: 0.4,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Main background change
gsap.to("#main", {
  backgroundColor: "#0a0a0a",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// About us section animation - FIXED to ensure visibility
gsap.fromTo("#about-us .about-img",
  {
    y: 90,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo("#about-us-in",
  {
    scale: 0.9,
    opacity: 0,
  },
  {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }
);

// Cards animation - FIXED OPACITY - Non-scrubbing version
gsap.fromTo(".card", 
  {
    scale: 0.85,
    opacity: 0,
    y: 80,
  },
  {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#cards-container",
      scroller: "body",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  }
);

// Green div animation
gsap.from("#green-div", {
  opacity: 0,
  scale: 0.95,
  scrollTrigger: {
    trigger: "#green-div",
    scroller: "body",
    start: "top 85%",
    end: "top 70%",
    scrub: 1,
  },
});

// Quote marks animation
gsap.from("#colon1", {
  x: -80,
  y: -80,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#colon2", {
  x: 80,
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page3 > p", {
  y: 50,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 75%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.fromTo("#page4 h1",
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.fromTo(".elem",
  {
    y: 120,
    opacity: 0,
    scale: 0.9,
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  }
);

gsap.from("#footer > div", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    start: "top 90%",
    end: "top 75%",
    scrub: 1,
  },
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const page1 = document.querySelector("#page1");
      
      if (page1 && scrolled < 800) {
        page1.style.transform = `translateY(${scrolled * 0.4}px)`;
        page1.style.opacity = Math.max(0, 1 - (scrolled / 600));
      }
      ticking = false;
    });
    ticking = true;
  }
});

// Add loading animation
window.addEventListener("load", () => {
  gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".hero-subtitle", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.from(".hero-description", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power3.out"
  });

  gsap.from("#arrow", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "back.out(1.5)"
  });

  gsap.from("#nav", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

const video = document.querySelector("#video-background video");
if (video) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(e => console.log("Video play failed:", e));
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.3 });

  videoObserver.observe(document.querySelector("#page1"));
}
const navLogo = document.querySelector(".nav-logo");
if (navLogo) {
  navLogo.addEventListener("mouseenter", () => {
    gsap.to(navLogo, {
      rotation: 360,
      duration: 0.6,
      ease: "power2.out"
    });
  });
}

const scrollerIn = document.querySelectorAll("#scroller-in");
const scroller = document.querySelector("#scroller");

if (scroller) {
  scroller.addEventListener("mouseenter", () => {
    scrollerIn.forEach(element => {
      element.style.animationPlayState = "paused";
    });
  });

  scroller.addEventListener("mouseleave", () => {
    scrollerIn.forEach(element => {
      element.style.animationPlayState = "running";
    });
  });
}

cards.forEach(card => {
  card.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

const style = document.createElement("style");
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

document.querySelectorAll(".nav-links h4, .mobile-menu h4").forEach(link => {
  link.addEventListener("click", function() {
    const text = this.textContent.trim().toLowerCase().replace(/\s+/g, "");
    let targetSection;

    switch(text) {
      case "home":
        targetSection = document.querySelector("#page1");
        break;
      case "menu":
        targetSection = document.querySelector("#page4");
        break;
      case "shop":
        targetSection = document.querySelector("#cards-container");
        break;
      case "about":
        targetSection = document.querySelector("#about-us");
        break;
      case "contact":
        targetSection = document.querySelector("#footer");
        break;
    }

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  });
});

const progressBar = document.createElement("div");
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #d4a574, #e6b887);
  z-index: 10000;
  transform-origin: left;
  box-shadow: 0 2px 10px rgba(212, 165, 116, 0.5);
`;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrollPercent + "%";
});
