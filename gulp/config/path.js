// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Папка в которая будет создаваться при использовании gulp
const srcFolder = `./src`; // Папка исходник, в которой будем работать

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    htaccess: `${buildFolder}/`,
    img: `${buildFolder}/images/`,
    files: `${buildFolder}/`, // Все файлы\папки из src помещаются сюда
  },
  src: {
    html: `${srcFolder}/*.html`,
    js: `${srcFolder}/js/*.js`,
    htaccess: `${srcFolder}/.htaccess`,
    scss: `${srcFolder}/scss/style.scss`,
    img: `${srcFolder}/images/**/*.*`,
    files: `${srcFolder}/**/*.*`, // Берем все папки и файлы с любым названием и форматом
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    // files: `${srcFolder}/**/*.*`,
    img: `${srcFolder}/images/**/*.*`,
    js: `${srcFolder}/js/*.js`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}