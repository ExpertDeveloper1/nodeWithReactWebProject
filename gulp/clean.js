/**
 * Created by qiaoheng on 3/31/16.
 */

export default (gulp) => {
    gulp.task('clean',['dist:clean','server:clean']);
}