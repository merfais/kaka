const home = {
  title: 'home',
  path: '/',
  component: () => import(/* webpackChunkName: "home" */'./index'),
  meta: {
    filePath: '@FILE_PATH@',
  },
};

export default {
  home,
};

