import fetch from 'isomorphic-fetch'

// FUTURE: Update to Rails app link
const API = 'http://localhost:4000/blogs'

export function getBlogs() {
  fetch(API)
    .then((res) => res)
    .catch((e) => console.log(e))
}

export function getBlog(id) {
  fetch(`${API}/${id}`)
    .then((res) => res)
    .catch((e) => console.log(e))
}
