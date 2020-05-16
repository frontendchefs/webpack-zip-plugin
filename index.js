class WebpackZipPlugin {
    apply(compiler) {
        compiler.hooks.afterEmit.tap('WebpackZipPlugin', (stats) => {
            console.log(stats.compilation.options.output);
        })
    }
}