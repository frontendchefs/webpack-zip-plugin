const chalk = require('chalk');
const fs = require('fs');

class WebpackZipPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackZipPlugin', (stats) => {
            const filePath = stats.compilation.options.output.path;
        });
    }
}

module.exports = WebpackZipPlugin;
