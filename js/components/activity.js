function isPlaceholder(value) {
  return !value || value.startsWith("#TODO")
}

function linkLabelFor(item) {
  if (item.linkLabel && !isPlaceholder(item.linkLabel)) return item.linkLabel
  const url = item.url || ""
  if (/github\.com/i.test(url)) return "View on GitHub"
  if (/\.pdf($|\?)/i.test(url) || /paper|arxiv|doi\.org|scholar|drive\.google/i.test(url)) {
    return "Read paper"
  }
  return "Visit link"
}

function renderExternalLink(item) {
  if (!item.url || item.url === "#" || isPlaceholder(item.url)) return ""
  return `
    <a
      class="text-btn text-btn--sm"
      href="${item.url}"
      target="_blank"
      rel="noopener noreferrer"
    >${linkLabelFor(item)} →</a>
  `
}

export function renderActivity({ sections, activity }) {
  const items = activity
    .map((item, index) => {
      const preview = item.preview || item.bullets?.[0] || ""
      const [name, ...roleParts] = item.title.split(" - ")
      const role = roleParts.join(" - ")
      return `
        <article class="activity-card">
          <div class="activity-card__body">
            <div class="activity-card__meta">
              <span class="activity-type">${item.type}</span>
              ${item.period ? `<span class="activity-period">${item.period}</span>` : ""}
            </div>
            <h3>${name}</h3>
            ${role ? `<p class="activity-role">${role}</p>` : ""}
            <p class="activity-preview">${preview}</p>
          </div>
          <div class="activity-card__actions">
            ${
              item.bullets?.length || item.images?.length
                ? `<button class="text-btn text-btn--sm" type="button" data-activity-index="${index}">
              Read more →
            </button>`
                : ""
            }
            ${renderExternalLink(item)}
          </div>
        </article>
      `
    })
    .join("")

  return `
    <section class="section section--screen" id="activity">
      <div class="container">
        <h2 class="section-title">${sections.activity.title}</h2>
        <div class="activity-grid">${items}</div>
      </div>
    </section>
  `
}
