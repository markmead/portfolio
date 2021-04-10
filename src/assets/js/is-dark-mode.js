export default function IsDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
