
import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import { eslint } from 'rollup-plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'
const getPath = _path => path.resolve(__dirname, _path)

export default {
    input: 'src/index.ts',
    output: {
        // 输出路径及文件名
        file: 'dist/bundle.js',
        // 输出格式
        format: 'iife'
      }
}