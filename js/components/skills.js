export function renderSkills({ sections, skills }) {
  const items = skills
    .map(skill => {
      const tags = skill.description
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
        .map(item => `<span class="skill-tag">${item}</span>`)
        .join("")

      return `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <div class="skill-tags">${tags}</div>
        </article>
      `
    })
    .join("")

  return `
    <section class="section" id="skills">
      <div class="container container--narrow">
        <h1 class="section-title">${sections.skills.title}</h1>
        <div class="skill-grid">${items}</div>
      </div>
    </section>
  `
}
