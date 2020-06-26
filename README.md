<div align="center">
    <h1>Webpack Zip Plugin</h1>
</div>

<p> A webpack plugin to zip the bundles and assets. Supported for webpack >= 4</p>

## Installation Instructions

1. `yarn add zip-webpack-assets-plugin`
2. Requires webpack version >= 4

## How to use?

```
    const ZipPlugin = require('zip-webpack-assets-plugin');
    new ZipPlugin({
        include: [],
    });
```
