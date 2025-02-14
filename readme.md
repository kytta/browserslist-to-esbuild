# kytta/browserslist-to-esbuild

> Use [browserslist](https://github.com/browserslist/browserslist) with [esbuild](https://esbuild.github.io/).

> [!NOTE]
> This is a fork of [`browserslist-to-esbuild`](https://github.com/marcofugaro/browserslist-to-esbuild) by Marco Fugaro with some changes (TBD)

Allows you to use browserslist and pass the correct browsers to esbuild's [target](https://esbuild.github.io/api/#target) option.

## Install

You have to install the `browserslist` package as well in your project:

```
npm install --save-dev browserslist @kytta/browserslist-to-esbuild
```

or

```
yarn add --dev browserslist @kytta/browserslist-to-esbuild
```

## Usage

You can call `browserslistToEsbuild()` directly in your `esbuild.mjs` script, it will look for your browserslist config in either `package.json` or the `.browserslistrc`.

It will return an esbuild-compatible array of browsers.

```js
import { build } from 'esbuild'
import browserslistToEsbuild from 'browserslist-to-esbuild'

await build({
  entryPoints: ['input.js'],
  outfile: 'output.js',
  bundle: true,
  target: browserslistToEsbuild(), // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
})
```

Otherwise, you can pass yourself a browserslist string or array to the function.

```js
browserslistToEsbuild('>0.2%, not dead')
```

## API

### browserslistToEsbuild(browserslistConfig?, options?)

#### browserslistConfig

Type: `string | string[] | undefined`

A string or array of strings of browsers [compatible with browserslist](https://github.com/browserslist/browserslist#full-list). If none is passed, a browserslist config is searched in the script running directory.

#### options

Type: `object | undefined`

An object containing the options that will be forwarded to browserslist. You can check out the [browserslist options documentation](https://github.com/browserslist/browserslist?tab=readme-ov-file#js-api) to see all the options available.
