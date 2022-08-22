# Стартовый шаблон проекта

**Начало работы**
- Для начала нажимаем **"use this template"**
- Задаем имя нашему проекту 
- С помощью **git clone "ваша ссылка проекта"** клонируем проект к себе на пк

Открываем проект и все, что нужно прописать в консоли это: `npm i`

Ждем окончания загрузки и после чего в консоли пишем `gulp`

Отлично! Теперь в готовы начать работать, поздравляю!

</br>

## Быстрая настройка проекта 

В файле **vars.scss** изменив только значения можно быстро настроить:
- Container. Задав максимальную ширину и паддинги
- Установить базовую настройку шрифтов
- Задать по умолчанию цвет ссылкам

</br>

## Задачи gulp этого шаблона

### js.js

Все файлы js в папке app объединяются в один файл main.js, который лежит в папке dist. 

:warning: **!!!ВАЖНО!!!** :warning:

По умолчанию этот файл подключен поэтому внешние какие-либо файлы подключать не нужно!

### fonts.js

Предназначен для того, чтобы файлы шрифтов формата **.otf или .ttf** конвертировать в **.woff и .woff2**

Так же создает в **папке scss** файл с названием **_fonts.scss**, где записывает подключение шрифтов, которые впоследствии можно использовать в любом scss файле

</br>

:warning: **Изначально эта задача не подключена, если она необходима, то нужно проделать следующие действия:** 

Создать в **src папку fonts** куда нужно закинуть все файлы

Перейти в файл **gulpfile.js** и раскомментировать эту строку

```
// @task: + fonts.js
// const baseTasks = gulp.series(fonts, gulp.parallel(html, scss, js, img, svg)
```

И закомментировать эту

```
// базовые задачи
const baseTasks = gulp.parallel(html, scss, js, img)
```

После перейти в **style.scss** и подключить файл **_fonts.scss**

`@import "fonts.scss";`

### svgSprite.js

Gulp создаст в *dist/images/svg* файл symbols.svg в котором будут все наши svg иконки

**При этом, такие атрибуты как fill, stroke, style будут автоматически удалены** 

А так же создаст страницу с перечнем иконок 

</br>

:warning: **Изначально эта задача не подключена, если она необходима, то нужно проделать следующие действия:** 

В **папке images создать папку svg**, куда закидываем все svg файлы

Перейти в файл **gulpfile.js** и раскомментировать эту строку 

```
// @task: + svgSprite.js
// const baseTasks = gulp.series(svgSprite, gulp.parallel(html, scss, js, img, svg))
```

И закомментировать эту

```
// базовые задачи
const baseTasks = gulp.parallel(html, scss, js, img)
```

## Если нужно воспользоваться одновременно svgSprite и fonts

В **gulpfile.js** раскомментировать эту строку 

```
// @task: fonts.js + svgSprite.js
// const baseTasks = gulp.series(fonts, svgSprite, gulp.parallel(html, scss, js, img, svg))
```

И закомментировать эту

```
// базовые задачи
const baseTasks = gulp.parallel(html, scss, js, img)
```

### reset.js
При каждом запуске `gulp` сначала запускается эта задача, которая отвечает за удаление лишних файлов в dist, которые были удалены в src  

### scss.js
Конвертирует **.scss в .css** и добавляет в папку *dist/css/*

### html.js
Добавляет файлы с форматом **.html** в *dist/*

### img.js
Добавляет картинки **в папку images** расположенную в *dist/images/*

### htaccess.js
Добавляет файл **.htaccess** в *dist/* 
