# rsbuild-image-tools-plugin
## Usage

Install:

```bash
npm add rsbuild-image-tools-plugin -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginExample } from "rsbuild-image-tools-plugin";

export default {
  plugins: [pluginExample()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginExample({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
