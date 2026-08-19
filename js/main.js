import { siteData } from "./data.js"
import { applyTheme } from "./theme.js"
import { renderNavbar, wireNavbar } from "./components/navbar.js"
import { renderHero, wireHeroRoles } from "./components/hero.js"
import { renderInDepth, wireInDepthReadMore } from "./components/in-depth.js"
import { renderActivity } from "./components/activity.js"
import { renderEducation } from "./components/education.js"
import { renderSkills } from "./components/skills.js"
import { renderContact } from "./components/contact.js"
import { renderModalShell, wireExploreModals } from "./components/modal.js"
import { wireImageCarousels } from "./components/image-carousel.js"
import { renderVolunteering } from "./components/volunteering.js"

function mountApp() {
  applyTheme()

  document.title = siteData.meta.title
  const description = document.querySelector('meta[name="description"]')
  if (description) description.content = siteData.meta.description

  document.getElementById("navbar").innerHTML = renderNavbar(siteData)

  document.getElementById("main").innerHTML = [
    renderHero(siteData),
    renderInDepth(siteData),
    renderActivity(siteData),
    renderVolunteering(siteData),
    renderEducation(siteData),
    renderSkills(siteData),
    renderContact(siteData),
    renderModalShell(),
  ].join("")

  wireExploreModals({ activity: siteData.activity, volunteering: [] })
  wireImageCarousels()
  wireInDepthReadMore()
  wireHeroRoles(document.querySelector("#role-text"), siteData.profile.roles)
  wireNavbar()
}

mountApp()
