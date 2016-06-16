import fs from 'fs';
import gulp from 'gulp';
import gtl from 'gulp-task-listing';

// blacklist self and utils folder
const blacklist = ['index.js'];

// get local files
const files = fs.readdirSync('./gulp').filter(f => !blacklist.includes(f));

// load custom tasks
files.forEach(function loadConfigFile(file) {
  require('./' + file).default(gulp);
});

gulp.task('default',gtl);
//gulp.task('default', ['debug']);
//gulp.task('deploy', ['build', 'assets']);
