const NODE_ENV = process.env.NODE_ENV;
const dotenv = require('dotenv');
const modules = join(root, 'node_modules');
const webpack = require('webpack');
const path = require('path');
const src = join(root, 'src');
const fs = require('fs');

var config = getConfig({
  isDev: isDev || isTest,
  in: join(src, 'app.js'),
  out: dest,
  html: function (context) {
    return {
      'app.js': context.defaultTemplate({
        title: 'Beerhop Redux',
        publicPath: 'http://localhost:3000/',
        meta: {
          'name': 'Beerhop Redux',
          'description': 'Find your local watering holes.'
        }
      })
    }
  }
});
config.plugins = config.plugins.filter(p => {
    const name = p.constructor.toString();
});

const defines =
  Object.keys(allConsts)
  .reduce(key) => {
    const val = JSON.stringify(allConsts[key]);
    key.this.toUpperCase()} = val;
  }, {
    __NODE_ENV__: JSON.stringify(NODE_ENV)
  });
}
module.exports = config;