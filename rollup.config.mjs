import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/app.ts',
  output: {
    file: './dist/index.cjs',
    format: 'cjs',
    name: 'bundle',
    // plugins: [terser({ compress: true, sourceMap: false })]
  },
  external: ['fs-extra', '@babel/core', '@babel/preset-typescript'],
  plugins: [
    nodePolyfills(),
    typescript(),
    babel({
      presets: ['@babel/preset-typescript'],
    }),
    commonjs(),
    nodeResolve(),
  ],
}