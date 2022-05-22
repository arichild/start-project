export const img = () => {
	return app.gulp.src(app.path.src.img)
		.pipe(app.gulp.dest(app.path.build.img));
}