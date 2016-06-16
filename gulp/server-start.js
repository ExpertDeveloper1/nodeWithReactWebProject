/**
 * Created by qiaoheng on 3/29/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";
import webpack from "webpack";
import webpackConfig from "../webpack.config.js";
import WebpackDevServer from "webpack-dev-server";
import packageJson from "../package.json";

const PORT = process.env.PORT || 3000;
const $ = gulpLoadPlugins({camelize: true});

export default (gulp) => {
    gulp.task('server:start',['server:static'], () =>  {

        const config = webpackConfig(true, 'build', PORT);
        let proxy = {};
        let headers = {};

        const server = new WebpackDevServer(webpack(config), {
                // webpack-dev-server options
                contentBase: 'build',
                publicPath: config.output.publicPath,

                hot: true,
                // Enable special support for Hot Module Replacement
                // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
                // Use "webpack/hot/dev-server" as additional module in your entry point
                // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

                // webpack-dev-middleware options
                quiet: false,
                noInfo: false,
                watchOptions: {
                    aggregateTimeout: 300,
                    poll: true,
                },
                headers,
                stats: {
                    chunks: false,
                    colors: true,
                },
                // Set this as true if you want to access dev server from arbitrary url.
                // This is handy if you are using a html5 router.
                historyApiFallback: true,
                // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
                // Use "*" to proxy all paths to the specified server.
                // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
                // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
                proxy,
            });

        server.listen(PORT, '0.0.0.0', (err) => {
            if (err) throw new $.util.PluginError('webpack-dev-server', err);

            $.util.log(`[${packageJson.name} serve]`, `Listening at 0.0.0.0:${PORT}`);
        });
    });
};
