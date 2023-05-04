# teza33

В данном проекте используется стартовый шаблон канала.
[Фрилансер по Жизни](https://fls.guru/)
На данном сайте есть документация к шаблону версии 3.0
Если ее пока еще нет, все равно весь функционал подробно расписан в самом шаблоне

---

# Документация

---

## Установка

```bash
npm i
```

### Запуск режима разработчика (c запуском сервера) это то что вам нужно в 90% случаев

```bash
npm run dev
```

### Запуск сборки проекта (без запуска сервера, только финальная сборка)

```bash
npm run build
```

### Запуск сборки проекта и выгрузка результата на сервер по FTP. (без запуска локальконо сервера)

Конфигурация FTP находится в файле config/gulp-settings.js

```bash
npm run deploy
```

### Запуск сборки проекта и создание zip архива с именем проекта. (без запуска локальконо сервера)

```bash
npm run zip
```

### Запуск сборки проекта но без создания webp картинок. (без запуска сервера, только финальная сборка)

```bash
npm run devbuild
```

### Запуск создания SVG спрайта, иконки нужно положить в папку src/svgicons,

готовый спрайт появится в папке dist/img/icons/icons.svg
(не входит в работу по умолчанию, при необходимости запустить командой)

```bash
npm run sprite
```

### Перезапись шрифтов ( можно использовать во время режима разработки в отдельной консоли)

```bash
npm run fonts
```

### Перезапись изображений webp формата ( можно во время разработки в отдельной консоли, также перезаписывает шрифты)

```bash
npm run webp
```

---

# Основные файлы для работы с шаблоном:

-  js/app.js
-  scss/style.scss
-  index.html - разводящая страница (содержание)
-  home.html - главная страница
-  файлы html/\*.htm - подключаемые части

---

# Используются псевдонимы пути к папкам:

-  @img = src/img
-  @scss = src/scss
-  @js = src/js

### Плагин для VS Code - Path Autocomplete

#### Настройки. Нажать в реждакторе F1, найти настройки Settings JSON, добавить код:

```JSON
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img", // псевдоним для папки img
	"@scss": "${folder}/src/scss", // псевдоним для папки scss
	"@js": "${folder}/src/js", // псевдоним для папки js
}
```

---

# При возникновении ошибок убедитесь что:

1. У вас установлен Node.js последней версии
2. Терминал открыт с правами администратора
3. В названиях папок на всем пути к проекту нет символа # или !
4. Папки и файлы должны быть названы латиницей без пробелов
5. Тег img и его содержимое должны быть записаны в одну строку без переносов
6. В атрибуте src должен быть указан путь к существующей картинке

---

# Прочие проблемы и их решения:

---

Ошибка node-sass.
Решения:
npm rebuild node-sass
и/или

```bash
	npm install sass gulp-sass --save-dev
```

---

Ошибка Pyton
Решени:

```bash
	npm install --global windows-build-tools
```

---

# В шаблоне используются относительные единицы измерения REM и EM

пример:

```scss
font-size: rem(16);
```

запись rem(16) - это формула.
находится в файле `mixin.scss`
в скобки `вписываете значение в пикселях` , `формула пересчитывает в rem`

### в медиазапросах используются EM - это нужно для лучшего адаптива

пример:

```scss
@media (max-width: em(1100)) {
	color: red;
	//em(1100) = 1100px
}
```

em() - формула из миксина
в скобки `вписываете значение в пикселях` , `формула пересчитывает в em`

#### em(28,16) -

-  1 параметр - ваше значение
-  2 параметр - размер шрифта. Если он не указан, то используется 16 ( размер по умолчанию в браузере )

# Где это может быть полезно

## Пример

```scss
.title {
	@include adaptiveValue("font-size", 48, 20, $containerWidth, $minWidth, 1);
	margin-bottom: em(20, 48);
	//1 параметр это отступ, второй это шрифт в настоящее время
	//Переменные $containerWidth, $minWidth заданы в style.scss
	//При уменьшении шрифта пропорционально будет уменьшаться и отступ
}
```

# в шаблоне вы постоянно будете встречать подобные записи @include adaptiveValue("font-size",48 , 20,$containerWidth, $minWidth, 1);

## Это адаптивное свойство - миксин

1.свойство
2.Начальное значение
3.конечное значение
4.Брейкпоинт на котором начинает действовать свойство
5.Брейкпоинт на котором заканчивает действовать свойство
6.Режим рабты 1 - max-width, 2 - min-width

# Пример

```scss
.title {
	@include adaptiveValue("font-size", 48, 20, $containerWidth, $minWidth, 1);
	//В данном случае изменяется font-size
	//Начальный размер 48px
	//Конечный 20px
	//$containerWIdth,$minWidth находятся в style.scss, равны соответсвенно 1170 и 320 в данном проекте
	//Важно ! В данный миксин вписываются все значения без едениц измерения ( без px,rem,em и т.д.)
	//С процентами не работает
	//Режим работы 1 - значит на 1170 px шрифт начнет уменьшаться с 48 и станет 20 к 320px
	//Можно задавать произвольный промежуток
	@include adaptiveValue("font-size", 48, 20, 900, 658, 1);
}
```

# К проекту приложены снипеты для более удобного использования шаблона
