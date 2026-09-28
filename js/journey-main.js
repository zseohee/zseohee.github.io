import { siteData } from "./data.js"
import { applyTheme } from "./theme.js"
import { renderNavbar, wireNavbar } from "./components/navbar.js"

function renderTags(items) {
  return items.map(item => `<li>${item}</li>`).join("")
}

function renderStage(stage, index, total) {
  const bridge = index < total - 1
    ? `
      <div class="journey-bridge" aria-label="Question leading to the next stage">
        <span>the next question</span>
        <p>${stage.nextQuestion}</p>
      </div>
    `
    : ""

  return `
    <article class="journey-stage" id="stage-${stage.number}">
      <div class="journey-stage__rail" aria-hidden="true">
        <span>${stage.number}</span>
      </div>
      <div class="journey-card">
        <div class="journey-card__heading">
          <div>
            <p class="journey-card__label">${stage.label}</p>
            <p class="journey-card__org">${stage.organization}</p>
            <h2>${stage.title}</h2>
          </div>
        </div>
        <div class="journey-card__question">
          <span>Research question</span>
          <p>${stage.question}</p>
        </div>
        <div class="journey-card__body">
          <div class="journey-card__narrative">
            <p>${stage.narrative}</p>
            <div class="journey-insight">
              <span>What I learned</span>
              <p>${stage.takeaway}</p>
            </div>
          </div>
          <div class="journey-card__work">
            <p>Work &amp; methods</p>
            <ul>${renderTags(stage.work)}</ul>
          </div>
        </div>
      </div>
    </article>
    ${bridge}
  `
}

function renderJourney({ journey }) {
  return `
    <section class="journey-hero">
      <div class="container container--narrow">
        <a class="journey-back" href="./index.html">← Back to portfolio</a>
        <p class="journey-eyebrow">${journey.eyebrow}</p>
        <h1>${journey.title}</h1>
        <p class="journey-intro">${journey.introduction}</p>
        <p class="journey-purpose">${journey.pagePurpose}</p>
        <div class="journey-prelude">
          <p class="journey-prelude__label">${journey.preludeLabel}</p>
          <div class="journey-prelude__grid">
            <aside class="journey-origin" aria-label="The origin of my research interests">
              <div class="journey-origin__copy">
                <p class="journey-origin__eyebrow">${journey.origin.eyebrow}</p>
                <h2>${journey.origin.title}</h2>
                <p>${journey.origin.text}</p>
              </div>
              <div class="journey-origin__doodle" aria-hidden="true">
                <span class="journey-origin__eyes"><i></i><i></i></span>
                ${journey.origin.note ? `<span class="journey-origin__note">${journey.origin.note}</span>` : ""}
              </div>
            </aside>
            <aside class="journey-pause" aria-label="A deliberate pause from school">
              <div>
                <p class="journey-pause__eyebrow">${journey.pause.eyebrow}</p>
                <h2>${journey.pause.title}</h2>
                <p>${journey.pause.text}</p>
              </div>
            </aside>
          </div>
        </div>
        <ol class="journey-arc" aria-label="Research journey overview">
          ${journey.arc.map((item, index) => `
            <li>
              <span>${String(index + 1).padStart(2, "0")}</span>
              <p>${item}</p>
            </li>
          `).join("")}
        </ol>
      </div>
    </section>

    <section class="journey-flow" aria-label="Research journey stages">
      <div class="container container--narrow">
        ${journey.stages.map((stage, index) => renderStage(stage, index, journey.stages.length)).join("")}
      </div>
    </section>

    <section class="journey-direction">
      <div class="container container--narrow">
        <div class="journey-direction__header">
          <p class="journey-eyebrow">${journey.direction.eyebrow}</p>
          <h2>${journey.direction.title}</h2>
          <p>${journey.direction.text}</p>
        </div>
        <div class="journey-pillars">
          ${journey.direction.pillars.map((pillar, index) => `
            <div class="journey-pillar">
              <span>0${index + 1}</span>
              <h3>${pillar.title}</h3>
              <p>${pillar.text}</p>
            </div>
          `).join("")}
        </div>
        <p class="journey-thesis">multimodal perception <i>×</i> robot learning <i>×</i> physical systems</p>
        <a class="btn btn--primary" href="./index.html#contact">Let’s talk about robots <span aria-hidden="true">→</span></a>
      </div>
    </section>
  `
}

function mountJourney() {
  applyTheme()
  const { journey } = siteData

  document.title = journey.meta.title
  document.querySelector('meta[name="description"]').content = journey.meta.description
  document.getElementById("navbar").innerHTML = renderNavbar(siteData, {
    pageBase: "./index.html",
    currentPage: "journey",
  })
  document.getElementById("journey-main").innerHTML = renderJourney(siteData)
  wireNavbar()
}

mountJourney()
