export function renderCurrentWork({ sections, currentWork = [] }) {
  if (!currentWork.length) return ""

  const items = currentWork
    .map(
      item => `
        <article class="now-card">
          <div class="now-card__topline">
            <span class="now-card__index">${item.index}</span>
            <span class="now-card__status"><i></i> ${item.status || "now exploring"}</span>
          </div>
          <p class="now-card__place">${item.place}</p>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
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
