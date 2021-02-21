# Quasar App (vue-dexie-quasar)

A Quasar Framework app

## 啟動文件 - [boot-files](https://quasar.dev/quasar-cli/boot-files#Introduction)

通常都是 src/main.js 為入口點，但長久下來會不好維護等，但 quasar 做了很多優化

1. 新增 main.js `quasar new boot <file-name>`

2. 告訴 Quasar 使用新的啟動文件。將檔案名稱加到 `/quasar.conf.js`

```js
boot: [
  // references /src/boot/<name>.js
  '<name>'
]
```

## Webpack 别名

- 設定 `@` 為別名噴錯，這篇 issues -[[How to set own alias](https://github.com/quasarframework/quasar/issues/3306)] 不建議這樣做。

- Quasar 有預先配置好的別名

src /src
app /
components /src/components
layouts /src/layouts
pages /src/pages
assets /src/assets
boot /src/boot

## Install the dependencies

```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
