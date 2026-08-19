export function renderNavbar({ nav }, options = {}) {
  const pageBase = options.pageBase ?? ""

  const sectionLinks = nav.links
    .map(link => `<a class="nav-link" href="${pageBase}#${link.id}">${link.label}</a>`)
    .join("")

  return `
    <header class="site-navbar" aria-label="Main navigation">
      <nav class="navbar-wrapper">
        <div class="left-nav">
          <a class="nav-btn" href="${nav.resume.href}">${nav.resume.label}</a>
        </div>
        <button
          class="nav-toggle"
          type="button"
          data-nav-toggle
          aria-expanded="false"
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
        <div class="right-nav" id="nav-menu" data-nav-menu>
          <div class="links-wrapper">${sectionLinks}</div>
        </div>
      </nav>
    </header>
  `
}

export function wireNavbar() {
  const toggle = document.querySelector("[data-nav-toggle]")
  const menu = document.querySelector("[data-nav-menu]")
  if (!toggle || !menu) return

  const close = () => {
    menu.classList.remove("is-open")
    toggle.classList.remove("is-open")
    toggle.setAttribute("aria-expanded", "false")
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open")
    toggle.classList.toggle("is-open", isOpen)
    toggle.setAttribute("aria-expanded", String(isOpen))
  })

  menu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", close)
  })

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close()
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) close()
  })
}
