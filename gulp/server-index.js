/**
 * Created by qiaoheng on 3/29/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";

const $ = gulpLoadPlugins({camelize: true});

export default (gulp) => {
    gulp.task('server:index', () => {
        return gulp
            .src('public/index.html')
            .pipe($.injectString.after('<!-- inject:app:js -->', '<script src="generated/main.js"></script>'))
            .pipe(gulp.dest('build'));
    });
};
