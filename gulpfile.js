import gulp from 'gulp'; // Основной модуль
import { path } from './gulp/config/path.js'; // Импорт путей

// Глобальная переменная в которую передаем значения
global.app = {
  path: path,
  gulp: gulp,
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { img } from "./gulp/tasks/img.js";
import { js } from "./gulp/tasks/js.js";
import { htaccess } from "./gulp/tasks/htaccess.js";

function watcher() {
  // gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.js, js);
}

const baseTasks = gulp.parallel(scss, html, img, js)

const dev = gulp.series(reset, htaccess, baseTasks, watcher)

gulp.task('default', dev);