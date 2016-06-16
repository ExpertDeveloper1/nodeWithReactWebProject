/**
 * Created by qiaoheng on 3/30/16.
 */

import runSequence from "run-sequence";

export default (gulp) => {
    gulp.task('server',() => runSequence('server:clean','server:index','server:start'));
}