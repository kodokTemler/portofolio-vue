<template>
  <div class="portfolio-root">
    <!-- LOADER -->
    <transition name="loader-fade">
      <div v-if="showLoader" class="loader-overlay">
        <div class="loader-inner">
          <img src="./assets/logoMAR.png" alt="MAR" class="loader-logo" />
          <div class="loader-bar-track">
            <div class="loader-bar-fill"></div>
          </div>
        </div>
      </div>
    </transition>

    <!-- NAVBAR -->
    <header class="nav-bar">
      <nav class="nav-inner">
        <div class="logo">
          <img src="./assets/logoMAR.png" alt="OcaDev" class="logo-img" />
        </div>

        <!-- Desktop Menu -->
        <ul class="nav-links desktop-menu">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" class="nav-link">{{ item.label }}</a>
          </li>
        </ul>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="theme-btn"
          aria-label="Toggle theme"
        >
          <svg
            v-if="theme === 'light'"
            class="theme-icon"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
          <svg
            v-else
            class="theme-icon"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="mobile-btn hamburger-btn"
          aria-label="Menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>

      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="mobile-menu">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="mobile-link"
          >
            {{ item.label }}
          </a>
        </div>
      </transition>
    </header>
    <!-- HERO SECTION -->
    <section id="home" class="hero-section">
      <div class="hero-grid-bg"></div>
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-tag" data-aos="fade-down">
            <span class="tag-arrow">▶</span>Junior Web Developer
          </div>
          <h1 class="hero-name" data-aos="fade-right">
            <span class="hero-hi">Hello, I'm</span>
            <span class="hero-oca">Muhammad Abdul Rozzaq</span>
          </h1>
          <p class="hero-desc" data-aos="fade-right" data-aos-delay="150">
            I build modern, responsive, and scalable web applications using
            HTML, CSS, JavaScript, Laravel, Bootstrap, Tailwind CSS, and MySQL.
          </p>
          <div class="hero-cta" data-aos="fade-right" data-aos-delay="300">
            <a href="#projects" class="btn-primary">View Projects</a>
            <a href="#contact" class="btn-outline">Contact Me</a>
          </div>
        </div>

        <div class="hero-avatar-wrap" data-aos="fade-left" data-aos-delay="200">
          <div class="avatar-frame">
            <img src="./assets/profile.JPG" alt="Oca" class="avatar-img" />
          </div>
          <div class="avatar-badge" data-aos="zoom-in" data-aos-delay="500">
            <strong>Available</strong>
            <span>for freelance</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="about-section">
      <div class="max-container">
        <div class="about-grid">
          <div class="about-text" data-aos="fade-right">
            <div class="section-label">// About Me</div>
            <h2 class="section-title">Building things<br />that matter.</h2>
            <p class="about-desc">
              I am a web developer focused on building elegant and
              high-performance web applications. I enjoy creating responsive
              interfaces and backend systems that provide the best user
              experience possible.
            </p>
            <p class="about-desc">
              With a strong foundation in both frontend and backend, I bring
              ideas from design to deployment — clean, efficient, and scalable.
            </p>
            <div class="stats-row" data-aos="fade-up" data-aos-delay="200">
              <div class="stat-box" data-aos="flip-up" data-aos-delay="300">
                <div class="stat-num">2+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-box" data-aos="flip-up" data-aos-delay="400">
                <div class="stat-num">10+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>

          <div class="about-img-wrap" data-aos="fade-left" data-aos-delay="150">
            <img src="./assets/aboutme.png" class="about-img" alt="About" loading="lazy" />
            <div class="about-img-frame"></div>
            <div class="about-img-tag" data-aos="fade-up" data-aos-delay="300">
              <strong class="about-img-name"
                >Muhammad Abdul Rozzaq, S.Kom</strong
              >
              <p class="about-img-sub">
                Based in Indonesia · Open to remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section id="skills" class="skills-section">
      <div class="max-container">
        <div class="section-label" data-aos="fade-up">// Skills</div>
        <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Tech Stack</h2>
        <div class="skills-grid">
          <div v-for="(skill, index) in skills" :key="skill.name" class="skill-card" data-aos="fade-up" :data-aos-delay="index * 80">
            <img :src="skill.icon" :alt="skill.name" class="skill-icon" loading="lazy" />
            <div class="skill-name">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="projects-section">
      <div class="max-container">
        <div class="section-label" data-aos="fade-up">// Projects</div>
        <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Featured Work</h2>
        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project-card"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          >
            <img
              :src="project.image"
              class="project-img"
              :alt="project.title"
              loading="lazy"
            />
            <div class="project-body">
              <div class="project-num">
                PROJECT {{ String(index + 1).padStart(2, "0") }}
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tech in project.tech" :key="tech" class="tag">{{
                  tech
                }}</span>
              </div>
              <button class="project-btn" @click="openLink(project.link)">
                View Project →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="contact-section">
      <div class="contact-inner" data-aos="fade-up">
        <div class="section-label">// Contact</div>
        <h2 class="section-title">Let's Work<br />Together.</h2>
        <p class="contact-desc">
          Have a project in mind or want to collaborate? I'd love to hear from
          you and explore what we can build together.
        </p>
        <div class="contact-links">
          <a
            href="https://github.com/kodokTemler"
            target="_blank"
            class="contact-link"
          >
            <svg class="contact-icon" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-abdul-rozzaq-436174398/"
            target="_blank"
            class="contact-link"
          >
            <svg class="contact-icon" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:abdulrozzaqmuh@gmail.com"
            class="contact-link contact-link-primary"
          >
            <svg
              class="contact-icon"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Me
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="footer-logo">MAR.</div>
      <div class="footer-copy">
        © 2026 Muhammad Abdul Rozzaq. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useScrollAnimation } from "@/composables/useScrollAnimation.js";

useScrollAnimation();

const showLoader = ref(true);
const mobileMenuOpen = ref(false);

const theme = ref("dark");

const applyTheme = (t) => {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  theme.value = t;
};

const toggleTheme = () => {
  applyTheme(theme.value === "dark" ? "light" : "dark");
};

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    applyTheme("dark");
  }
  setTimeout(() => {
    showLoader.value = false;
  }, 400);
});

const openLink = (link) => {
  window.open(link, "_blank");
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const skills = ref([
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
]);

const projects = [
  {
    title: "Stunting Prediction System",
    description:
      "Web-based system for predicting stunting using Gaussian Naive Bayes integrated with Laravel and Python.",
    image: "/images/stunting.png",
    tech: ["Laravel", "Python", "MySQL", "Bootstrap"],
    link: "https://github.com/kodokTemler/aplikasi-prediksi-stunting-naive-bayes",
  },
  {
    title: "Football Field Booking",
    description:
      "An online soccer field booking system equipped with scheduling, payment, and email verification features during the account creation process.",
    image: "/images/lapanganbola.png",
    tech: [
      "PHP",
      "Bootstrap",
      "MySQL",
      "Mitrans",
      "Mailtrap",
      "Tailwind CSS",
      "SweetAlert2",
    ],
    link: "https://github.com/kodokTemler/Reservasi-Lapangan-Futsal",
  },
  {
    title: "Memories Coffee Shop Website",
    description:
      "A simple web application for a local coffee shop to manage their menu and orders.",
    image: "/images/kopikenangan.png",
    tech: ["JavaScript", "Bootstrap", "PHP", "MySQL", "Mitrans"],
    link: "https://github.com/kodokTemler/Aplikasi-Kasir-Caffe",
  },
  {
    title: "Batupute Village Website, Barru Regency",
    description:
      "Official website for Batupute village, providing information and services to residents.",
    image: "/images/batupute.png",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://website.desa-batupute.com/",
  },
];
</script>
