export default [
  {
    path: "/skills/",
    component: () => import(/* webpackChunkName: "page--src--pages--skills-vue" */ "/Users/mark/c/portfolio/src/pages/Skills.vue")
  },
  {
    path: "/portfolio/",
    component: () => import(/* webpackChunkName: "page--src--pages--portfolio-vue" */ "/Users/mark/c/portfolio/src/pages/Portfolio.vue")
  },
  {
    path: "/blog/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/mark/c/portfolio/src/pages/Blog.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mark/c/portfolio/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mark/c/portfolio/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mark/c/portfolio/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mark/c/portfolio/node_modules/gridsome/app/pages/404.vue")
  }
]

