# Практика: css modules vs styled components

## Задача:

В файле MainPage.tsx используются 2 кнопки. Стилизация одной построена на css modules, стилизация другой на styled components.
Вам нужно дописать отсутсвующие фрагменты кода в каждой из них. Для этого:
  - css modules:
    1. в файле Button.module.scss создайте 3 класса ".size_m", ".size_l" и ".size_xl" c прописанным font-size. Значения берите из global.scss
    2. в файле ButtonCss.tsx прикрепите к button дополнительный класс с размером в зависимости от полученного size. Константа с названиями классов - ButtonFontSize.
  - styled components:
    1. в файле Button.styles.ts добавьте поле font-size которое будет зависеть от size. Значения бериет из theme.fontSize

## Материалы:
Информация:
  1. Про css modules можно почитать здесь - https://habr.com/ru/articles/335244/
  2. Styled Components - https://styled-components.com/  

Видео - https://youtube.com/shorts/iDXTieu34-s

## Запуск проекта:
* `npm i` - установка библиотек
* `npm run dev` - сборка для разработки
