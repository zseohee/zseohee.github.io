import { renderImageCarousel, getItemImages } from "./image-carousel.js"

function renderStack(stack = []) {
  if (!stack.length) return ""
  const tags = stack
    .filter(item => !item.startsWith("#TODO"))
    .map(item => `<span class="stack-tag">${item}</span>`)
    .join("")
  return `<div class="stack-tags">${tags}</div>`
}

function renderParagraphs(paragraphs = []) {
  return paragraphs.map(p => `<p class="editorial-body">${p}</p>`).join("")
}

export function renderInDepth({ sections, inDepth }) {
  const items = inDepth
    .map((item, index) => {
      const images = getItemImages(item)
      const carousel = renderImageCarousel(images, `indepth-${index}`)
      const shouldCollapse = item.paragraphs.join(" ").length > 520 || item.paragraphs.length > 2

      return `
        <article class="in-depth-item">
          <div class="container in-depth-layout">
            <div class="in-depth-media">${carousel}</div>
            <div class="in-depth-content">
              <p class="in-depth-period">${item.period}</p>
              <h3 class="in-depth-title">${item.title}</h3>
              ${renderStack(item.stack)}
              <div class="in-depth-body ${shouldCollapse ? "in-depth-body--collapsed" : ""}" data-in-depth-body>
                ${renderParagraphs(item.paragraphs)}
              </div>
              ${
                shouldCollapse
                  ? `
                    <div class="in-depth-actions">
                      <button class="text-btn text-btn--sm in-depth-read-more" type="button" data-in-depth-toggle aria-expanded="false">Read more →</button>
                    </div>
                  `
                  : ""
              }
            </div>
          </div>
        </article>
      `
    })
    .join("")

  return `
    <section id="in-depth">
      <div class="container in-depth-section-heading">
        <h1 class="section-title">${sections.inDepth.title}</h1>
      </div>
      <div class="in-depth-list">${items}</div>
    </section>
  `
}

export function wireInDepthReadMore(root = document) {
  root.querySelectorAll("[data-in-depth-toggle]").forEach(button => {
    const content = button.closest(".in-depth-content")
    const body = content?.querySelector("[data-in-depth-body]")
    const item = button.closest(".in-depth-item")
    if (!body) return
    let collapsedScrollY = null

    button.addEventListener("click", () => {
      const isExpanded = body.classList.toggle("is-expanded")
      body.classList.toggle("in-depth-body--collapsed", !isExpanded)
      button.setAttribute("aria-expanded", String(isExpanded))
      button.textContent = isExpanded ? "Show less ↑" : "Read more →"

      if (isExpanded) {
        collapsedScrollY = window.scrollY
        window.setTimeout(() => {
          item?.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 300)
      } else if (collapsedScrollY !== null) {
        const returnY = collapsedScrollY
        collapsedScrollY = null
        window.setTimeout(() => {
          window.scrollTo({ top: returnY, behavior: "smooth" })
        }, 300)
      }
    })
  })
}
