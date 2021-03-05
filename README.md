# rollup-plugin-sizeme

display brotli and gzip sizes for rollup assets.

## Usage

Install it using NPM:

```bash
npm install --save-dev rollup-plugin-sizeme
```

or using yarn:

```bash
yarn add --dev rollup-plugin-sizeme
```

then in `rollup.config.js`

```js
import { sizeme } from 'rollup-plugin-sizeme'

export default {
	plugins: [sizeme()],
}
```

## Output format:

```
> Asset Size:   462 B    373 B      unplug.js
                (gzip)   (brotli)   (filename)
```

## License

MIT License @ 2020 osdevisnot
