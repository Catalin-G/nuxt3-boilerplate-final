module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'prettier/prettier': 2
  }
};
