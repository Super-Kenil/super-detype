import typescript2 from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

/** @type {import('rollup').RollupOptions} */
export default {
  input: './src/app.ts',
  output: {
    file: './dist/index.min.cjs',
    format: 'cjs',
    name: 'bundle',
    plugins: [terser({ compress: true, sourceMap: false })]
  },
  external: ['fs-extra', '@babel/core', '@babel/preset-typescript'],
  plugins: [
    typescript2(),
    json(),
    babel({
      presets: ['@babel/preset-typescript'],
    }),
    commonjs(),
  ],
}