/**
 * Created by qiaoheng on 3/29/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";
const $ = gulpLoadPlugins({camelize: true});

export default (gulp) => {
    gulp.task('dist:index', () => {
        const app = gulp.src(["*.{css,js}"], {cwd: 'dist-intermediate/generated'})
                        .pipe(gulp.dest('dist'));

        // Build the index.html using the names of compiled files
        return gulp.src('public/index.html')
            .pipe($.inject(app, {ignorePath: 'dist', starttag: '<!-- inject:app:{{ext}} -->'}))
            .on("error", $.util.log)
            .pipe(gulp.dest('dist'));
    });
};
