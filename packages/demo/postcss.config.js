const path = require('path')

module.exports = {
  plugins: [
    require("postcss-import")({
      resolve(id, basedir) {
        if (/^~demo-common\//.test(id)) {
          return path.resolve('./src/common', id.slice('~demo-common/'.length))
        }

        // resolve relative path, prefix with './' or '../'
        if (/^\./.test(id)) return path.resolve(basedir, id)

        // resolve node_modules, @import 'normalize.css/normalize.css'
        return path.resolve('./node_modules', id)
      }
    }),
    require("postcss-mixins"),
    require("postcss-nested"),
    require("postcss-preset-env")(),
  ],
};
