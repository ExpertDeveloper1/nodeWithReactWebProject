/**
 * Created by qiaoheng on 3/29/16.
 */

import del from 'del';

export default (gulp) => {
    gulp.task('server:clean', cb => del('build', {dot: true}, cb));
};
