import { siteData } from "./data.js"
import { applyTheme } from "./theme.js"
import { renderNavbar, wireNavbar } from "./components/navbar.js"

function mountResume() {
  applyTheme()
  const { resume, profile } = siteData

  document.title = resume.title
  document.querySelector('meta[name="description"]').content = `${profile.name} — Resume`

  document.getElementById("navbar").innerHTML = renderNavbar(siteData, {
    pageBase: "./index.html",
  })
  wireNavbar()

  document.getElementById("resume-main").innerHTML = `
    <section class="section section--resume-page">
      <div class="container">
        <div class="resume-page-header">
        <p class="resume-page-subtitle">${resume.subtitle}</p>
        </div>

        <div class="resume-preview">
          <iframe
            id="resume-pdf"
            title="${resume.title}"
            src="${resume.pdfUrl}#view=FitH"
          ></iframe>
        </div>
      </div>
    </section>
  `
}

mountResume()
