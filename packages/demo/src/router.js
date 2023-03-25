import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import {
  map,
  omit,
  upperFirst,
} from 'lodash-es';
import home from '@/pages/home/route';

const config = {
  ...home,
  notFound: {
    title: '',
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
};

function genRoutesConf(rawConfig, pName = '') {
  return map(rawConfig, (item, name) => {
    const conf = omit(item, ['children', 'title', 'icon']);
    if (item.children) {
      conf.children = genRoutesConf(item.children, name);
    }
    conf.name = pName ? `${pName}${upperFirst(name)}` : name;
    return conf;
  });
}

const router = createRouter({
  history: createWebHistory('/'),
  routes: genRoutesConf(config),
});

export default router;

