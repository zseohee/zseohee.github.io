export const theme = {
  bg: "#faf6f5",
  bgElevated: "#ffffff",
  text: "#1a1414",
  textMuted: "#6b5c5c",
  accent: "#c5050c",
  border: "#eadfdc",
  serif: '"Source Serif 4", Georgia, "Times New Roman", serif',
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
}

export function applyTheme(config = theme) {
  const root = document.documentElement
  root.style.setProperty("--bg", config.bg)
  root.style.setProperty("--bg-elevated", config.bgElevated)
  root.style.setProperty("--text", config.text)
  root.style.setProperty("--text-muted", config.textMuted)
  root.style.setProperty("--accent", config.accent)
  root.style.setProperty("--border", config.border)
  root.style.setProperty("--font-serif", config.serif)
  root.style.setProperty("--font-sans", config.sans)
}
