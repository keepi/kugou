'use strict'
// 合并对象
const merge = require('webpack-merge')
// 一个对象
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
