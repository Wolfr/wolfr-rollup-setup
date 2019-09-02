// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

export default {
  input: 'js/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'amd',
  },
  plugins: [
    resolve({
      browser: false,
      mainFields: ['index.js']
    }),
    commonjs(),
    sass({
        output: 'dist/styles.css',
        processor: css => postcss([autoprefixer])
            .process(css)
            .then(result => result.css)
    })
  ]
}