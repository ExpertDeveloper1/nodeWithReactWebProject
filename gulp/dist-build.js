/**
 * Created by qiaoheng on 3/29/16.
 */

import webpack from "webpack";
import webpackConfig from "../webpack.config.js";
import gulpLoadPlugins from "gulp-load-plugins";
import packageJson from "../package.json";

const $ = gulpLoadPlugins({camelize: true});

export default (gulp) => {
    gulp.task('dist:build', ['dist:static'],(cb) => {
        const config = webpackConfig(false, 'dist-intermediate');

        webpack(config, (err, stats) => {
            if (err) throw new $.util.PluginError('dist', err);

            $.util.log(`[${packageJson.name} dist]`, stats.toString({chunks: true, modules: false,colors: true}));

            cb();
        });
    });
};
