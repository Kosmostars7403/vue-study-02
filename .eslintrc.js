module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-labels': 'off',
    'block-spacing': 'off',
    'no-mutating-props': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'no-unused-expressions': 'off',
    'indent': 'off'
  }
}
