const path = require('path') 
const resolve = require('rollup-plugin-node-resolve')  // 依赖引用插件
const commonjs = require('rollup-plugin-commonjs')  // commonjs模块转换插件
const typescript = require('rollup-plugin-typescript2')
const babel = require("rollup-plugin-babel")
const typescript = require('rollup-plugin-typescript2')
const package = require("./build.package.json")
const json = require("rollup-plugin-json")
const getPath = _path => path.resolve(__dirname, _path)
const extensions = ['.js', '.ts', '.tsx']

export default {
    input: getPath("./src/index.ts"),
    output: [
     {
        name: "gentle",
        format: "umd",
        file: "dist/main.es.js",
     }
    ],
    plugins: [
      resolve(extensions),
      json(),
      commonjs(),
      typescript(), // 会自动读取 文件tsconfig.json配置
      babel({
        exclude: 'node_modules/**', // 只编译我们的源代码,
        extensions
      }),
  
    ]
}