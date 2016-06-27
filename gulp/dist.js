/**
 * Created by qiaoheng on 3/30/16.
 */

import runSequence from "run-sequence";

export default (gulp) => {
    gulp.task('dist',() => runSequence('dist:clean','dist:build','dist:index','dist:server'));
}