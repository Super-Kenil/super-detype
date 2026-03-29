# Super-Kenil/super-detype

> ⭐️ Thanks **everyone** who has starred the project, it means a lot!
<br/>

?> This transpiler converts your **WHOLE** Typescript project to Javascript:
<br/>
> This tool is a command-line utility and a library designed to strip away TypeScript-specific syntax elements, such as type annotations and other TypeScript-specific constructs, from your code. It converts TypeScript files—both `.ts` and `.tsx` formats—into standard JavaScript. The main goal is to retain the original structure and formatting of your source code as much as possible, ensuring that the conversion is smooth and non-intrusive. By removing only the TypeScript-specific syntax, it ensures that the resulting JavaScript code is clean, lightweight, and ready for environments that don't support TypeScript. This tool is ideal for situations where you need to quickly transpile TypeScript code to JavaScript without introducing major changes to the original code style.
<br/>
Yeah. `tsc` does that, but it doesn't preserve formatting

> Eg. If your homie doesn't know Typescript, don't go removing types file by file by yourself manually or use tools which removes types from the code you copy and paste into the tool, don't be an old hag, just download and use super-detype to remove types automatically from your whole project without any issues.


### How to Install


!> **Its crucial to install it globally, so that you can use it from any directory of terminal**

* In your terminal

<!-- tabs:start -->

#### **bun**

```
bun i -g super-detype
```

#### **npm**

```
npm i -g super-detype
```

#### **yarn**

```
yarn global add super-detype
```
#### **pnpm**

```
pnpm add -g super-detype
```
#### **deno**

```
deno install -g npm:super-detype
```

<!-- tabs:end -->


* If you do not wish to install it, then just
```
npx super-detype "<typescript-project-directory>" "<output-directory>"
```
<br/>

### How to Use
?> 1. In your terminal\
2. It's recommended to wrap the path with "quotes" to select folders with spaces\
3. **First arguement:** should be the path of your typescript project's directory which you want to convert\
4. **Second arguement:** should be the path of destination where you want to save your converted project
<pre>cli 👇        input directory path 👇    output 👇directory path  </pre>
```
super-detype "<typescript-project-directory>" "<output-directory>"
```

### Programmatic Usage

You can also use `super-detype` in your own scripts by importing `runConversion`.

```typescript
import { runConversion } from 'super-detype'

// Basic usage
await runConversion({
  inputPath: './src',
  outputPath: './src-js'
})

// Advanced usage with options
await runConversion({
  inputPath: './src',
  outputPath: './dist',
  // Glob pattern to match files (e.g. "**/*.ts")
  pattern: '**/*.{ts,tsx}',
  // Custom filter to skip files or directories
  filter: (name, isDirectory) => {
    if (name === 'node_modules') return false
    return true
  },
  // Custom path transformer to change destination files
  pathTransform: (relativePath, isDirectory) => {
    if (isDirectory) return relativePath
    return relativePath.replace('page.tsx', 'page.jsx')
  }
})
```



### Supports
1. React
2. Nodejs
3. Vite + HTML

Does not support (yet):
* Vue
* Svelte


?> [Star](https://github.com/Super-Kenil/super-detype) this repository if it was ever helpful to you in any ways😁