import webpack from "webpack-stream";
import babel from "gulp-babel";

export const js = () => {
  return (
    app.gulp
      .src(app.path.src.js, { sourcemaps: app.isDev })
      // .pipe(app.plugins.plumber(
      // 	app.plugins.notify.onError({
      // 		title: 'JS Error',
      // 		message: 'Error: <%= error.message %>'
      // 	}))
      // )
      .pipe(
        webpack({
          mode: app.isBuild ? "production" : "development",
          output: {
            filename: "script.min.js",
          },
        })
      )
      .pipe(
        babel({
          presets: [
            [
              "@babel/preset-env",
              {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage",
              },
            ],
          ],
        })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream())
  );
};
