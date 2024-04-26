import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  entries: [
    "./src/app.ts",
    {
      input: "./src/app.ts",
      outDir: "./dist",
    },
  ],
  declaration: true,
})