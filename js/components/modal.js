function isPlaceholder(value) {
  return !value || value.startsWith("#TODO")
}

function renderStack(stack = [], small = false) {
  if (!stack.length) return ""
  const cls = small ? "stack-tag stack-tag--sm" : "stack-tag"
  const tags = stack
    .filter(item => !isPlaceholder(item))
    .map(item => `<span class="${cls}">${item}</span>`)
    .join("")
  return tags ? `<div class="stack-tags">${tags}</div>` : ""
}

function renderSlides(images = []) {
  const validImages = images.filter(img => !isPlaceholder(img))

  if (!validImages.length) {
    return ""
  }

  return validImages
    .map(
      (src, index) => `
        <div class="modal-slide" data-slide="${index}">
          <img src="${src}" alt="Project photo ${index + 1}" loading="lazy" />
        </div>
      `
    )
    .join("")
}

export function renderModalShell() {
  return `
    <div id="explore-modal" class="explore-modal" aria-hidden="true">
      <div class="explore-modal__backdrop" data-modal-close></div>
      <div class="explore-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="explore-modal__close" type="button" data-modal-close aria-label="Close">×</button>

        <div class="explore-modal__media is-hidden" id="modal-media">
          <button class="modal-nav modal-nav--prev" type="button" data-modal-prev aria-label="Previous image" hidden>‹</button>
          <div class="modal-carousel">
            <div class="modal-track" id="modal-track"></div>
          </div>
          <button class="modal-nav modal-nav--next" type="button" data-modal-next aria-label="Next image" hidden>›</button>
          <div class="modal-dots" id="modal-dots" hidden></div>
        </div>

        <div class="explore-modal__content">
          <span class="activity-type" id="modal-type"></span>
          <h2 class="explore-modal__title" id="modal-title"></h2>
          <div id="modal-stack"></div>
          <ul class="modal-bullets" id="modal-bullets"></ul>
        </div>
      </div>
    </div>
  `
}

const AUTOPLAY_INTERVAL_MS = 3000

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function wireModalCarousel(modal, track, dots, getValidImages) {
  let slideIndex = 0
  let slides = []
  let timer = null

  function updateSlides() {
    slides = Array.from(track.querySelectorAll(".modal-slide"))
    const validCount = slides.filter(s => !s.querySelector(".modal-slide__placeholder")).length
    const showNav = validCount > 1

    modal.querySelector(".modal-nav--prev").hidden = !showNav
    modal.querySelector(".modal-nav--next").hidden = !showNav
    dots.hidden = !showNav

    track.style.transform = `translateX(-${slideIndex * 100}%)`

    Array.from(dots.children).forEach((dot, index) => {
      dot.classList.toggle("is-active", index === slideIndex)
    })
  }

  function goToSlide(index) {
    const validCount = slides.length
    if (!validCount) return
    slideIndex = (index + validCount) % validCount
    updateSlides()
  }

  function stopAutoplay() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  }

  function startAutoplay() {
    stopAutoplay()
    if (!modal.classList.contains("is-open")) return
    if (slides.length <= 1) return
    if (prefersReducedMotion()) return
    timer = setInterval(() => goToSlide(slideIndex + 1), AUTOPLAY_INTERVAL_MS)
  }

  const media = modal.querySelector(".explore-modal__media")
  media?.addEventListener("mouseenter", stopAutoplay)
  media?.addEventListener("mouseleave", startAutoplay)

  return {
    reset: () => {
      slideIndex = 0
    },
    updateSlides,
    goToSlide,
    goToPrev: () => goToSlide(slideIndex - 1),
    goToNext: () => goToSlide(slideIndex + 1),
    startAutoplay,
    stopAutoplay,
    getValidImages,
  }
}

export function wireExploreModals({ activity = [], volunteering = [] }) {
  const modal = document.getElementById("explore-modal")
  if (!modal) return

  const track = document.getElementById("modal-track")
  const dots = document.getElementById("modal-dots")
  const mediaEl = document.getElementById("modal-media")
  const typeEl = document.getElementById("modal-type")
  const titleEl = document.getElementById("modal-title")
  const stackEl = document.getElementById("modal-stack")
  const bulletsEl = document.getElementById("modal-bullets")

  const carousel = wireModalCarousel(modal, track, dots, item =>
    (item.images || []).filter(img => !isPlaceholder(img))
  )

  function openModal(item) {
    carousel.reset()

    typeEl.textContent = item.type || "Volunteering"
    titleEl.textContent = item.title
    stackEl.innerHTML = renderStack(item.stack, true)

    bulletsEl.innerHTML = (item.bullets || [])
      .filter(bullet => !isPlaceholder(bullet))
      .map(bullet => `<li>${bullet}</li>`)
      .join("")

    const validImages = carousel.getValidImages(item)
    track.innerHTML = renderSlides(item.images || [])

    if (validImages.length) {
      mediaEl.classList.remove("is-hidden")
      dots.innerHTML = Array.from({ length: validImages.length }, (_, i) =>
        `<button type="button" class="modal-dot" data-dot="${i}" aria-label="Go to image ${i + 1}"></button>`
      ).join("")
      carousel.updateSlides()
      carousel.startAutoplay()
    } else {
      mediaEl.classList.add("is-hidden")
      dots.innerHTML = ""
      carousel.stopAutoplay()
    }

    modal.classList.add("is-open")
    modal.setAttribute("aria-hidden", "false")
    document.body.classList.add("modal-open")
  }

  function closeModal() {
    carousel.stopAutoplay()
    modal.classList.remove("is-open")
    modal.setAttribute("aria-hidden", "true")
    document.body.classList.remove("modal-open")
  }

  document.querySelectorAll("[data-activity-index]").forEach(button => {
    button.addEventListener("click", () => {
      openModal(activity[Number(button.dataset.activityIndex)])
    })
  })

  document.querySelectorAll("[data-volunteering-index]").forEach(button => {
    button.addEventListener("click", () => {
      openModal(volunteering[Number(button.dataset.volunteeringIndex)])
    })
  })

  modal.querySelectorAll("[data-modal-close]").forEach(el => {
    el.addEventListener("click", closeModal)
  })

  modal.querySelector("[data-modal-prev]").addEventListener("click", () => {
    carousel.goToPrev()
    carousel.startAutoplay()
  })
  modal.querySelector("[data-modal-next]").addEventListener("click", () => {
    carousel.goToNext()
    carousel.startAutoplay()
  })

  dots.addEventListener("click", event => {
    const dot = event.target.closest("[data-dot]")
    if (!dot) return
    carousel.goToSlide(Number(dot.dataset.dot))
    carousel.startAutoplay()
  })

  document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) return
    if (event.key === "Escape") closeModal()
    if (event.key === "ArrowLeft") {
      carousel.goToPrev()
      carousel.startAutoplay()
    }
    if (event.key === "ArrowRight") {
      carousel.goToNext()
      carousel.startAutoplay()
    }
  })
}
