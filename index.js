const chalk = require('chalk');

class WebpackZipPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackZipPlugin', (stats) => {
            console.log(chalk.green(stats.compilation.options.output));
        });
    }
}

module.exports = WebpackZipPlugin;
