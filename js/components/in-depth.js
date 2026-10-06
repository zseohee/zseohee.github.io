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

function renderCaseNotes(item) {
  const notes = [["question", item.question]].filter(([, value]) => value)

  if (!notes.length) return ""

  return `
    <dl class="case-notes">
      ${notes
        .map(
          ([label, value]) => `
            <div class="case-note">
              <dt>${label}</dt>
              <dd>${value}</dd>
            </div>
          `
        )
        .join("")}
    </dl>
  `
}

function renderAffiliation(title) {
  const [org, ...rest] = title.split(" - ")
  const role = rest.join(" - ")
  return role
    ? `<span class="in-depth-org">${org}</span><span class="in-depth-role">${role}</span>`
    : org
}

export function renderInDepth({ sections, inDepth }) {
  const items = [...inDepth]
    .sort((a, b) => (a.order || 99) - (b.order || 99))
    .map((item, index) => {
      const media = getItemImages(item)
      const hasMedia = media.length > 0
      const carousel = hasMedia ? renderImageCarousel(media, `indepth-${index}`) : ""
      const shouldCollapse = item.paragraphs.join(" ").length > 520 || item.paragraphs.length > 2
      const isCurrent = /Present/.test(item.period)

      return `
        <article class="in-depth-item${hasMedia ? "" : " in-depth-item--text-only"}">
          <div class="container in-depth-layout">
            ${hasMedia ? `<div class="in-depth-media">${carousel}</div>` : ""}
            <div class="in-depth-content">
              <p class="in-depth-period">${isCurrent ? `<span class="in-depth-now"><i aria-hidden="true"></i>Now</span>` : ""}${item.period}</p>
              <p class="in-depth-affiliation">${renderAffiliation(item.title)}</p>
              <h3 class="in-depth-title">${item.caseTitle || item.title}</h3>
              ${renderStack(item.stack)}
              ${renderCaseNotes(item)}
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
        <h2 class="section-title">${sections.inDepth.title}</h2>
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
