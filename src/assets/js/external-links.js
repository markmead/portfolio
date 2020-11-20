export default function ExternalLinks() {
  const links = document.links

  for (let link of links) {
    if (link.hostname !== window.location.hostname) {
      link.target = '_blank'
      link.rel = 'noreferrer'
    }
  }
}
