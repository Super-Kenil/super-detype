import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["src/app.ts"],
		format: ["cjs"],
		target: "node18",
	},
]);