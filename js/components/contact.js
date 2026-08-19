export function renderContact({ sections, contact, profile, nav }) {
  const socialIcons = contact.social
    .map(
      item => `
          <a href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
            <span class="social-fallback">${item.label}</span>
          </a>
      `
    )
    .join("")

  return `
    <section class="section section--contact" id="contact">
      <div class="container container--narrow container--center">
        <div class="footer-container">
          <h1 class="section-title">${sections.contact.title}</h1>
          <h2>${contact.subheading}</h2>
          <a class="email-link" href="mailto:${contact.email}">${contact.email}</a>
          <a class="contact-resume-link" href="${nav.resume.href}">View resume →</a>
          <div class="social-icons">${socialIcons}</div>
          <span class="footer-note">© ${new Date().getFullYear()} ${profile.name}</span>
        </div>
      </div>
    </section>
  `
}
