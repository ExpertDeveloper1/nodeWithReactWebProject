/**
 * Created by qiaoheng on 3/29/16.
 */

import del from 'del';

export default (gulp) => {
    gulp.task('dist:clean', (cb) => {
        return del(['dist','dist-intermediate'],{dot:true},cb);
    });
};
