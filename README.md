# nuxttest.local

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Описание некоторых папок

- Папка `api` содержит PHP код, который подключается к базе и предоставляет простой REST (использован минифреймворк MEDOO https://medoo.in/)
- Адрес, на котором по идее лежит PHP код прописан в `./nuxt.config.js` в `env.baseURL` (Его нужно будет заменить на свой)
- Папка `./static` - содержит картинки, и может содержать например SVG файлы, видео. В nuxt приложении эти файлы будут доступны `адрес сайта/файл.расшинение`
- Папка `./layouts` - содержит шаблоны вывода. Для каждой страницы можно создать и прописать свой шаблон
- Папка `./pages` - содержит страницы. Структура файлов будет преобразована в роуты. Их можно переопределять.