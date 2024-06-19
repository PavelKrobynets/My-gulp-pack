import gulp from "gulp";
import jsonServer from "gulp-json-srv";

var server = jsonServer.create();

export const serverJSON = async () => {
  await gulp.task("start", function () {
    return gulp.src("db.json").pipe(server.pipe());
  });
};

