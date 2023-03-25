module.exports = () => {
  const config = {
    parser: require('postcss-less'),
    map: false,
    plugins: {
      'postcss-nested': {},
    },
  };
  return config;
};
