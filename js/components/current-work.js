export function renderCurrentWork({ sections, currentWork = [] }) {
  if (!currentWork.length) return ""

  const items = currentWork
    .map(
      item => `
        <article class="now-card">
          <div class="now-card__topline">
            <span class="now-card__status"><i aria-hidden="true"></i>Active</span>
            <span class="now-card__period">${item.period}</span>
          </div>
          <h3 class="now-card__lab">${item.lab}</h3>
          <p class="now-card__role">${item.role}</p>
          <dl class="now-card__meta">
            <div><dt>Advisor</dt><dd>${item.advisor}</dd></div>
            <div><dt>Location</dt><dd>${item.location}</dd></div>
          </dl>
          <p class="now-card__desc">${item.description}</p>
          ${
            item.focus?.length
              ? `<ul class="now-card__focus" aria-label="Focus areas">${item.focus.map(tag => `<li>${tag}</li>`).join("")}</ul>`
              : ""
          }
        </article>
      `
    )
    .join("")

  return `
    <section class="section current-work" id="now">
      <div class="container">
        <p class="section-kicker">open notebook · fall 2026</p>
        <h2 class="section-title">${sections.currentWork.title}</h2>
        <div class="now-grid">${items}</div>
      </div>
    </section>
  `
}
