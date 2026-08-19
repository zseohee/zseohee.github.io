function isPlaceholder(value) {
  return !value || value.startsWith("#TODO")
}

function getImages(item) {
  if (item.images?.length) {
    return item.images.filter(img => !isPlaceholder(img))
  }
  if (item.imageUrl && !isPlaceholder(item.imageUrl)) {
    return [item.imageUrl]
  }
  return []
}

const AUTOPLAY_INTERVAL_MS = 3000

export function renderImageCarousel(images, carouselId) {
  const validImages = images.filter(img => !isPlaceholder(img))

  if (!validImages.length) {
    return `<div class="image-carousel image-carousel--empty">#TODO: add images</div>`
  }

  const slides = validImages
    .map(
      (src, index) => `
        <img
          class="carousel-slide"
          src="${src}"
          alt="Slide ${index + 1}"
          loading="${index === 0 ? "eager" : "lazy"}"
        />
      `
    )
    .join("")

  const showNav = validImages.length > 1

  return `
    <div class="image-carousel" data-carousel-id="${carouselId}">
      ${showNav ? `<button class="carousel-nav carousel-nav--prev" type="button" aria-label="Previous image">‹</button>` : ""}
      <div class="carousel-viewport">
        <div class="carousel-track">${slides}</div>
      </div>
      ${showNav ? `<button class="carousel-nav carousel-nav--next" type="button" aria-label="Next image">›</button>` : ""}
      ${showNav ? `<div class="carousel-counter"><span class="carousel-counter__current">1</span> / ${validImages.length}</div>` : ""}
    </div>
  `
}

export function getItemImages(item) {
  return getImages(item)
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function wireImageCarousels(root = document) {
  root.querySelectorAll(".image-carousel[data-carousel-id]").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track")
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"))
    if (!track || slides.length <= 1) return

    const prev = carousel.querySelector(".carousel-nav--prev")
    const next = carousel.querySelector(".carousel-nav--next")
    const counter = carousel.querySelector(".carousel-counter__current")
    let index = 0
    let timer = null

    const goTo = nextIndex => {
      index = (nextIndex + slides.length) % slides.length
      track.style.transform = `translateX(-${index * 100}%)`
      if (counter) counter.textContent = String(index + 1)
    }

    const stopAutoplay = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    const startAutoplay = () => {
      stopAutoplay()
      if (prefersReducedMotion()) return
      timer = setInterval(() => goTo(index + 1), AUTOPLAY_INTERVAL_MS)
    }

    prev?.addEventListener("click", () => {
      goTo(index - 1)
      startAutoplay()
    })
    next?.addEventListener("click", () => {
      goTo(index + 1)
      startAutoplay()
    })

    carousel.addEventListener("mouseenter", stopAutoplay)
    carousel.addEventListener("mouseleave", startAutoplay)
    carousel.addEventListener("focusin", stopAutoplay)
    carousel.addEventListener("focusout", startAutoplay)

    startAutoplay()
  })
}
