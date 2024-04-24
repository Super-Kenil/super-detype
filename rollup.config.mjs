import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/app.ts',
  output: {
    file: './dist/bundle.cjs',
    format: 'cjs',
    name: 'bundle'
  },
  external: ['fs-extra','@babel/core'],
  plugins: [
    nodePolyfills(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-typescript'],
      extensions: ['.ts', '.tsx'],
      include: ['src/**/*'],
    }),
    commonjs(),
    json(),
    nodeResolve({
      extensions: ['.js', '.ts', '.tsx'],
    }),
  ],
}