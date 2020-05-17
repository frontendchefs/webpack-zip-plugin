const chalk = require('chalk');

class WebpackZipPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackZipPlugin', (stats) => {
            
        });
    }
}

module.exports = WebpackZipPlugin;
