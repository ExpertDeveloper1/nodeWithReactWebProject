/**
 * Created by qiaoheng on 6/27/16.
 */

import gulpLoadPlugins from "gulp-load-plugins";
const $ = gulpLoadPlugins({camelize: true});


export default (gulp) => {
  gulp.task('dist:server', () => {
    gulp.src(['src/**'])
      .pipe(gulp.dest('dist/app'));

  });
};
