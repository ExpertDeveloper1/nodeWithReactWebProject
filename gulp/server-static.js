/**
 * Created by qiaoheng on 3/30/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";

const $ = gulpLoadPlugins({camelize: true});

export default (gulp) => {
    gulp.task('server:static', () =>
        gulp.src([
                'public/static/**'
            ])
            .pipe($.changed('build'))
            .pipe(gulp.dest('build'))
            .pipe($.size({title: 'static'}))
    );
}