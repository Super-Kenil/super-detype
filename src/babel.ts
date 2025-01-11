import type { Overrides } from 'recast/parsers/_babel_options'
import type { ParserOptions, ParserPlugin } from "@babel/parser"

function getOption (options: any, key: any, defaultValue: any): any {
  if (options && Object.prototype.hasOwnProperty.call(options, key)) {
    return options[key]
  }
  return defaultValue
}

export function getBabelOptions (options?: Overrides): ParserOptions & {
  plugins: ParserPlugin[]
} {
  return {
    sourceType: getOption(options, "sourceType", "module"),
    strictMode: getOption(options, "strictMode", false),
    allowImportExportEverywhere: true,
    allowReturnOutsideFunction: true,
    startLine: 1,
    tokens: true,
    plugins: [
      "asyncGenerators",
      "bigInt",
      "classPrivateMethods",
      "classPrivateProperties",
      "classProperties",
      "classStaticBlock",
      "decimal",
      "decorators-legacy",
      "doExpressions",
      "dynamicImport",
      "exportDefaultFrom",
      // @ts-ignore
      "exportExtensions",
      "exportNamespaceFrom",
      "functionBind",
      "functionSent",
      "importAssertions",
      "importMeta",
      "nullishCoalescingOperator",
      "numericSeparator",
      "objectRestSpread",
      "optionalCatchBinding",
      "optionalChaining",
      [
        "pipelineOperator",
        {
          proposal: "minimal",
        },
      ],
      [
        "recordAndTuple",
        {
          syntaxType: "hash",
        },
      ],
      "throwExpressions",
      "topLevelAwait",
      "v8intrinsic",
    ],
  }
}