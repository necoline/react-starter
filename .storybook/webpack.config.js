  
module.exports = function({ config, mode }) {
    config.module.rules.push({
      test: /\.stories\.jsx?$/,
      loaders: [require.resolve('@storybook/source-loader')],
      enforce: 'pre',
    });
    return config;
  };