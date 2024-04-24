import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

/** @type {import('rollup').RollupOptions} */
export default {
  input: './app.ts',
  output: {
    file: './build/bundle.cjs',
    format: 'cjs',
    name: 'bundle'
  },
  external: ['fs-extra', '@babel/core', '@babel/preset-typescript'],
  plugins: [
    nodePolyfills(),
    typescript(),
    babel(),
    nodeResolve({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
  ]
}