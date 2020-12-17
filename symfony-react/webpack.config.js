var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    .addEntry('admin', './assets/app.tsx')
    .addEntry('mk', './assets/mk.tsx')

    .enableStimulusBridge('./assets/controllers.json')

    .splitEntryChunks()

    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })

    // enables @babel/preset-env polyfills
    // .configureBabelPresetEnv((config) => {
    //     config.useBuiltIns = 'usage';
    //     config.corejs = 3;
    // })
    .enableLessLoader(function (lessConfig) {
        lessConfig.lessOptions = {javascriptEnabled: true}
        console.log('lessConfig', lessConfig)
    })
    .enableTypeScriptLoader(function (tsConfig) {
        tsConfig.transpileOnly = true;
        tsConfig.silent = true;
    })
    .enableForkedTypeScriptTypesChecking()
    .enableReactPreset()
    .enablePostCssLoader((options) => {
        optionspostcssOptions = {
            path: './postcss.config.js'
        };
    })

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
