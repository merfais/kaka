export default async function addPlugin(app) {
  return Promise.all([
    import(/* webpackChunkName: "antv" */'./ant-design-vue'),
    import(/* webpackChunkName: "element-plus" */'./element-plus'),
    import(/* webpackChunkName: "r-components" */'./r-comps'),
  ]).then((arr) => {
    arr.forEach(module => module.add(app));
  });
}
