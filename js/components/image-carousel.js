function isPlaceholder(value) {
  return !value || (typeof value === "string" && value.startsWith("#TODO"))
}

function normalizeMedia(entry) {
  if (typeof entry === "string") {
    return { type: "image", src: entry }
  }
  return entry
}

function getMedia(item) {
  if (item.images?.length) {
    return item.images.filter(entry => !isPlaceholder(entry)).map(normalizeMedia)
  }
  if (item.imageUrl && !isPlaceholder(item.imageUrl)) {
    return [normalizeMedia(item.imageUrl)]
  }
  return []
}

const AUTOPLAY_INTERVAL_MS = 3000

export function renderImageCarousel(media, carouselId) {
  const validMedia = media.filter(item => item?.src && !isPlaceholder(item.src))

  if (!validMedia.length) {
    return `<div class="image-carousel image-carousel--empty">#TODO: add images</div>`
  }

  const slides = validMedia
    .map((item, index) => {
      if (item.type === "video") {
        return `
          <div class="carousel-slide carousel-slide--video" data-media-type="video">
            <video
              class="carousel-slide__media"
              aria-label="${item.title || `Video ${index + 1}`}"
              autoplay
              muted
              loop
              playsinline
              controls
              preload="metadata"
            >
              <source src="${item.src}" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        `
      }

      return `
        <div class="carousel-slide" data-media-type="image">
          <img
            class="carousel-slide__media"
            src="${item.src}"
            alt="${item.alt || `Slide ${index + 1}`}"
            loading="${index === 0 ? "eager" : "lazy"}"
          />
          ${item.note ? `<span class="carousel-annotation">${item.note}</span>` : ""}
        </div>
      `
    })
    .join("")

  const showNav = validMedia.length > 1

  return `
    <div class="image-carousel" data-carousel-id="${carouselId}">
      ${showNav ? `<button class="carousel-nav carousel-nav--prev" type="button" aria-label="Previous media">‹</button>` : ""}
      <div class="carousel-viewport">
        <div class="carousel-track">${slides}</div>
      </div>
      ${showNav ? `<button class="carousel-nav carousel-nav--next" type="button" aria-label="Next media">›</button>` : ""}
      ${showNav ? `<div class="carousel-counter"><span class="carousel-counter__current">1</span> / ${validMedia.length}</div>` : ""}
    </div>
  `
}

export function getItemImages(item) {
  return getMedia(item)
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

    const syncVideoPlayback = () => {
      slides.forEach((slide, slideIndex) => {
        const video = slide.querySelector("video")
        if (!video) return
        if (slideIndex === index) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      })
    }

    const stopAutoplay = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    const goTo = nextIndex => {
      index = (nextIndex + slides.length) % slides.length
      track.style.transform = `translateX(-${index * 100}%)`
      if (counter) counter.textContent = String(index + 1)
      syncVideoPlayback()
      if (slides[index]?.dataset.mediaType === "video") stopAutoplay()
    }

    const startAutoplay = () => {
      stopAutoplay()
      if (prefersReducedMotion()) return
      if (slides[index]?.dataset.mediaType === "video") return
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

    syncVideoPlayback()
    startAutoplay()
  })
}
