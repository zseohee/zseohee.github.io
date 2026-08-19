export function renderEducation({ sections, education }) {
  const items = education
    .slice(0, 3)
    .map(item => {
      const hasImage = item.imageUrl && !item.imageUrl.startsWith("#TODO")
      const image = hasImage
        ? `<img src="${item.imageUrl}" alt="${item.title}" class="edu-image" loading="lazy" />`
        : `<div class="edu-image edu-image--placeholder">#TODO: image</div>`

      const body = `
        ${image}
        <div class="edu-tile__overlay">
          <h3 class="edu-tile__title">${item.title}</h3>
          <p class="edu-tile__desc">${item.description}</p>
        </div>
      `

      if (item.url && item.url !== "#" && !item.url.startsWith("#TODO")) {
        return `
          <a class="edu-tile" href="${item.url}" target="_blank" rel="noopener noreferrer">
            ${body}
          </a>
        `
      }

      return `<div class="edu-tile">${body}</div>`
    })
    .join("")

  return `
    <section class="section" id="education">
      <div class="container">
        <h1 class="section-title">${sections.education.title}</h1>
        <div class="edu-grid">${items}</div>
      </div>
    </section>
  `
}
