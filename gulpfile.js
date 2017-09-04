var gulp = require("gulp"),
		browserSync = require('browser-sync');


gulp.task('server', function(){
		browserSync({
			port: 9000,
			// proxy: "php.dev"
			server: {
				baseDir: '.'
			}
		});
});
gulp.task('watch', function(){
		gulp.watch([
			'./**/*.html',
			'./**/*.php',
			'./**/*.css',
			]).on('change', browserSync.reload);
});
gulp.task('default', ['server', 'watch']);
