export function renderHero({ profile, introduction }) {
  const photo = profile.aboutImage
  const hasPhoto = photo && !photo.startsWith("#TODO")
  const bodyText = introduction?.text || profile.intro || ""

  return `
    <section class="section section--hero" id="home">
      <div class="container hero-inner">
        <div class="hero-layout">
          <div class="hero-copy">
            <p class="hero-kicker">Portfolio</p>
            <h1 class="hero-title">Hi, I am ${profile.name}</h1>
            <p class="hero-role">
              I am a
              <span class="typewriter-text">
                <span id="role-text">${profile.roles[0]}</span><span class="typewriter-cursor">_</span>
              </span>
            </p>
            <p class="editorial-body introduction-text hero-about">${bodyText}</p>
            <a class="text-btn" href="${profile.ctaUrl}">${profile.ctaLabel} →</a>
          </div>
          ${
            hasPhoto
              ? `
                <figure class="hero-photo">
                  <img src="${photo}" alt="${profile.name} portrait" loading="eager" />
                </figure>
              `
              : ""
          }
        </div>
      </div>
    </section>
  `
}

export function wireHeroRoles(element, words) {
  if (!element || !words?.length) return

  const typeSpeed = 70
  const deleteSpeed = 50
  const pause = 1200

  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timerId = null

  const tick = () => {
    const word = words[wordIndex]

    if (!deleting) {
      charIndex += 1
      element.textContent = word.slice(0, charIndex)

      if (charIndex === word.length) {
        deleting = true
        timerId = window.setTimeout(tick, pause)
        return
      }

      timerId = window.setTimeout(tick, typeSpeed)
      return
    }

    charIndex -= 1
    element.textContent = word.slice(0, charIndex)

    if (charIndex === 0) {
      deleting = false
      wordIndex = (wordIndex + 1) % words.length
      timerId = window.setTimeout(tick, deleteSpeed)
      return
    }

    timerId = window.setTimeout(tick, deleteSpeed)
  }

  tick()
}
