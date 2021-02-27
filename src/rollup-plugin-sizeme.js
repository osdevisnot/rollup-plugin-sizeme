import gzip from 'gzip-size';
import { sync } from 'brotli-size';
import prettyBytes from 'pretty-bytes';
import { green, bold } from 'kleur';

export const sizeme = () => {
  const showSize = (bundle) => {
    const { code, fileName } = bundle;
    const gzipSize = prettyBytes(gzip.sync(code));
    const brotliSize = prettyBytes(sync(code));
    console.log();
    console.log(bold(green(`> Sizes:\t${gzipSize}\t${brotliSize}\t${fileName}`)));
    console.log();
  };

  return {
    name: 'sizeme',
    generateBundle(_, bundle, isWrite) {
      if (isWrite) {
        Object.keys(bundle)
          .map((file) => bundle[file])
          .filter((bundle) => !bundle.isAsset)
          .forEach((bundle) => showSize(bundle));
      }
    },
  };
};
