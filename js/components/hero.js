export function renderHero({ profile, introduction }) {
  const photo = profile.aboutImage
  const hasPhoto = photo && !photo.startsWith("#TODO")
  const lead = introduction?.lead || ""
  const bodyText = introduction?.body || introduction?.text || profile.intro || ""

  return `
    <section class="section section--hero" id="home">
      <div class="container hero-inner">
        <div class="hero-layout">
          <div class="hero-copy">
            <div class="notebook-meta" aria-hidden="true">
              <span class="notebook-meta__label">
                seohee's robotics log
              </span>
            </div>
            <h1 class="hero-title">Hi, I’m ${profile.name}.</h1>
            ${lead ? `<p class="hero-lead">${lead}</p>` : ""}
            <p class="hero-summary">${bodyText}</p>
            <div class="hero-actions">
              <a class="btn btn--primary" href="${profile.journeyUrl}">${profile.journeyLabel} <span aria-hidden="true">→</span></a>
            </div>
          </div>
          ${hasPhoto ? `
            <div class="hero-visual">
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
