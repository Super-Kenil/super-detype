import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
export default {
  input: './app.ts',
  output: {
    file: './build/bundle.min.js',
    format: 'cjs',
    name: 'bundle'
  },
  plugins: [
    nodePolyfills(),
    typescript()
  ]
}