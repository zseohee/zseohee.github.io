function isPlaceholder(value) {
  return !value || value.startsWith("#TODO")
}

function renderStack(stack = []) {
  if (!stack.length) return ""
  const tags = stack
    .filter(item => !item.startsWith("#TODO"))
    .map(item => `<span class="stack-tag stack-tag--sm">${item}</span>`)
    .join("")
  return tags ? `<div class="stack-tags">${tags}</div>` : ""
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
      return `
        <article class="activity-card">
          <div class="activity-card__body">
            <span class="activity-type">${item.type}</span>
            <h3>${item.title}</h3>
            ${renderStack(item.stack)}
            <p class="activity-preview">${preview}</p>
          </div>
          <div class="activity-card__actions">
            <button class="text-btn text-btn--sm" type="button" data-activity-index="${index}">
              Read more →
            </button>
            ${renderExternalLink(item)}
          </div>
        </article>
      `
    })
    .join("")

  return `
    <section class="section section--screen" id="activity">
      <div class="container">
        <h1 class="section-title">${sections.activity.title}</h1>
        <div class="activity-grid">${items}</div>
      </div>
    </section>
  `
}
