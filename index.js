const chalk = require('chalk');
const fs = require('fs');

class WebpackZipPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackZipPlugin', (stats) => {
            const filePath = stats.compilation.options.output.path;
            fs.readdir(filePath, (error, files) => {
                files.forEach(file => {
                    const { size } = fs.readFile(path.resolve(filePath, file))
                })
            })
        });
    }
}

module.exports = WebpackZipPlugin;
