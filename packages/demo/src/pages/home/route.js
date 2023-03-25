const home = {
  title: 'home',
  path: '/',
  component: () => import(/* webpackChunkName: "home" */'./index'),
  meta: {
    filePath: 'pages/home/index.vue',
  },
};

export default {
  home,
};

