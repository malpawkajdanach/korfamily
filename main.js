function checkPassword() {
      const input = document.getElementById('password-input').value;
      if (input === 'kordyjak') {
        document.getElementById('password-overlay').style.display = 'none';
      } else {
        alert('Nieprawidłowe hasło');
      }
    }

    function toggleTheme() {
      const body = document.body;
      const btn = document.querySelector('.theme-toggle');
      if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
      } else {
        body.setAttribute('data-theme', 'light');
        btn.textContent = '🌙';
      }
    }

  const sections = document.querySelectorAll("section[id], h2[id]");
  const navLinks = document.querySelectorAll("#sidebar a");

  function onScroll() {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `#sidebar a[href="#${section.id}"]`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);

   // Zapamiętywanie motywu
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });

  // Sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll("figure img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });