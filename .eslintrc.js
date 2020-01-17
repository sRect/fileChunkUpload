module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 支持检测js文件
    'linebreak-style': [1, 'windows'],
    'comma-dangle': [1, 'only-multiline'], // 对象字面量项尾不能有逗号
    'arrow-parens': 0, // 去除箭头函数用小括号括起来
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'no-unused-expressions': 0
  },
};
