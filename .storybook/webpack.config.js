const customConfig = require('../config/webpack.config.dev.babel');

module.exports = {
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: customConfig.module.rules } };
  },
};

// module.exports = async ({ config }) => console.dir(config.module, { depth: null }) || config;
