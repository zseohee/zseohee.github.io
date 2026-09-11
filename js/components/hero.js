export function renderHero({ profile, introduction }) {
  const photo = profile.aboutImage
  const hasPhoto = photo && !photo.startsWith("#TODO")
  const bodyText = introduction?.text || profile.intro || ""

  return `
    <section class="section section--hero" id="home">
      <div class="container hero-inner">
        <div class="hero-layout">
          <div class="hero-copy">
            <div class="notebook-meta" aria-hidden="true">
              <span class="notebook-meta__label">
                <img class="hero-manipulation-doodle" src="./images/icons/manipulation.png" alt="" />
                seohee's robotics log
              </span>
            </div>
            <h1 class="hero-title">Hi, I’m ${profile.name}.</h1>
            <p class="hero-summary">${bodyText}</p>
            <a class="text-btn" href="${profile.ctaUrl}">${profile.ctaLabel} →</a>
          </div>
          ${hasPhoto ? `
            <div class="hero-visual">
              <span class="sketch-note sketch-note--beep" aria-hidden="true">beep boop!</span>
              <figure class="hero-photo">
                <img src="${photo}" alt="${profile.name} portrait" loading="eager" />
                <figcaption>manipulation · vision-language-action models</figcaption>
              </figure>
              <div class="robot-doodle" aria-hidden="true">
                <span class="robot-doodle__antenna"></span>
                <span class="robot-doodle__head"><i></i><i></i></span>
                <span class="robot-doodle__body">01</span>
                <span class="robot-doodle__arm robot-doodle__arm--left"></span>
                <span class="robot-doodle__arm robot-doodle__arm--right"></span>
                <span class="robot-doodle__feet"></span>
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    </section>
  `
}
