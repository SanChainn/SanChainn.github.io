/* ============================================================
   Portfolio - script.js
   Theme toggle, mobile nav, typing effect, reveal animations,
   counters, project filtering, active nav, form handling
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable - ignore */
    }
  }

  // Restore saved theme or use system preference
  try {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      applyTheme("light");
    }
  } catch (e) {
    /* ignore */
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("nav__menu--open");
      navToggle.classList.toggle("nav__toggle--open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("nav__menu--open");
        navToggle.classList.remove("nav__toggle--open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header scroll effect ---------- */
  const header = document.getElementById("header");

  function onScrollHeader() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- Typing effect ---------- */
  const typedEl = document.getElementById("typed-text");
  const phrases = [
    "AI / Machine Learning Engineer",
    "Generative AI & Computer Vision",
    "Ph.D. Candidate (Final Year)",
    "LLM & RAG Systems Architect",
    "Published Researcher",
  ];

  if (typedEl && phrases.length) {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const phrase = phrases[phraseIndex];

      if (!deleting) {
        typedEl.textContent = phrase.slice(0, ++charIndex);
        if (charIndex === phrase.length) {
          deleting = true;
          setTimeout(type, 2000); // pause at end of phrase
          return;
        }
        setTimeout(type, 80);
      } else {
        typedEl.textContent = phrase.slice(0, --charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 400); // pause before next phrase
          return;
        }
        setTimeout(type, 40);
      }
    }
    setTimeout(type, 600);
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) {
      el.classList.add("reveal--visible");
    });
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".stat-card__value[data-count]");

  function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const duration = 1600;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic for a nicer finish
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      counterObserver.observe(el);
    });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  /* ---------- Project filtering ---------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // Update active button state
      filterBtns.forEach(function (b) {
        b.classList.remove("filter-btn--active");
      });
      btn.classList.add("filter-btn--active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(function (card) {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("project-card--hidden");
        } else {
          card.classList.add("project-card--hidden");
        }
      });
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  function setActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove("nav__link--active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("nav__link--active");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Contact form (demo validation) ---------- */
  const form = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (form && statusEl) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.elements.name;
      const email = form.elements.email;
      const message = form.elements.message;
      let valid = true;

      [name, email, message].forEach(function (field) {
        field.classList.remove("input--error");
      });

      if (!name.value.trim()) {
        name.classList.add("input--error");
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        email.classList.add("input--error");
        valid = false;
      }

      if (!message.value.trim()) {
        message.classList.add("input--error");
        valid = false;
      }

      if (!valid) {
        statusEl.textContent = "Please fill in all fields with a valid email.";
        statusEl.className = "form__status form__status--error";
        return;
      }

      // NOTE: Static sites (GitHub Pages) can't send email directly.
      // Replace this demo handler with a service like Formspree:
      //   https://formspree.io/create
      statusEl.textContent =
        "Thanks, " +
        name.value.trim().split(" ")[0] +
        "! This demo form doesn't send email yet - please email me directly instead.";
      statusEl.className = "form__status form__status--success";
      form.reset();
    });
  }
})();