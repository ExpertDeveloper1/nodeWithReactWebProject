/**
 * Created by qiaoheng on 3/29/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";
const $ = gulpLoadPlugins({camelize: true});


export default (gulp) => {
    gulp.task('dist:static', () => {
        gulp.src(['public/static/**'])
            .pipe(gulp.dest('dist'))
            .pipe($.size({title: 'static'}));

    });
};
