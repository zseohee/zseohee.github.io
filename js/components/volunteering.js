function renderStack(stack = []) {
  if (!stack.length) return ""
  const tags = stack
    .filter(item => !item.startsWith("#TODO"))
    .map(item => `<span class="stack-tag stack-tag--sm">${item}</span>`)
    .join("")
  return tags ? `<div class="stack-tags">${tags}</div>` : ""
}

export function renderVolunteering({ sections, volunteering }) {
  const items = volunteering
    .map(item => {
      const preview = item.preview || ""
      return `
        <article class="activity-row activity-row--plain">
          <div class="activity-row__meta">
            <h3>${item.title}</h3>
            ${renderStack(item.stack)}
            <p class="activity-preview">${preview}</p>
          </div>
        </article>
      `
    })
    .join("")

  return `
    <section class="section" id="volunteering">
      <div class="container container--narrow">
        <h1 class="section-title">${sections.volunteering.title}</h1>
        <div class="activity-list">${items}</div>
      </div>
    </section>
  `
}
