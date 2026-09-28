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

function categoryFor(item) {
  if (item.type === "Research") return "research"
  if (item.type === "Experience") return "experience"
  if (item.type === "Organization") return "organizations"
  if (item.type === "Volunteering" || item.type.includes("Leadership")) return "leadership"
  return "projects"
}

const activityFilters = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "experience", label: "Experience" },
  { value: "projects", label: "Projects" },
  { value: "organizations", label: "Organizations" },
  { value: "leadership", label: "Leadership & Volunteering" },
]

export function renderActivity({ sections, activity }) {
  const items = activity
    .map((item, index) => {
      const preview = item.preview || item.bullets?.[0] || ""
      const [name, ...roleParts] = item.title.split(" - ")
      const role = roleParts.join(" - ")
      return `
        <article class="activity-card" data-activity-category="${categoryFor(item)}">
          <div class="activity-card__body">
            <div class="activity-card__meta">
              <span class="activity-type">${item.type}</span>
              ${item.period ? `<span class="activity-period">${item.period}</span>` : ""}
            </div>
            <h3>${name}</h3>
            ${role ? `<p class="activity-role">${role}</p>` : ""}
            ${renderStack(item.stack)}
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
        <p class="section-kicker">robots, tools, and useful things</p>
        <h2 class="section-title">${sections.activity.title}</h2>
        <p class="activity-lede">A running archive of systems I have designed, coded, assembled, and learned from.</p>
        <div class="activity-filters" role="group" aria-label="Filter activities">
          ${activityFilters
            .map(
              (filter, index) => `
                <button
                  class="activity-filter${index === 0 ? " is-active" : ""}"
                  type="button"
                  data-activity-filter="${filter.value}"
                  aria-pressed="${index === 0}"
                >${filter.label}</button>
              `
            )
            .join("")}
        </div>
        <div class="activity-grid" data-activity-grid>${items}</div>
      </div>
    </section>
  `
}

export function wireActivityFilters(root = document) {
  const filters = Array.from(root.querySelectorAll("[data-activity-filter]"))
  const cards = Array.from(root.querySelectorAll("[data-activity-category]"))
  if (!filters.length || !cards.length) return

  filters.forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.activityFilter

      filters.forEach(filter => {
        const isActive = filter === button
        filter.classList.toggle("is-active", isActive)
        filter.setAttribute("aria-pressed", String(isActive))
      })

      cards.forEach(card => {
        card.hidden = selected !== "all" && card.dataset.activityCategory !== selected
      })
    })
  })
}
