module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".js", ".tsx"] }],
    // enforces putting a file extension. Sadly, .ts and .tsx files are not allowed and also Airbnb conflicts 
    //  with this https://github.com/airbnb/javascript#modules--import-extensions, so left as a warning.
    "import/extensions": ["warn", "ignorePackages"],
    'import/no-unresolved': ["off"], // makes import assume literal path, essential doing the same as 'import/extensions' rule
    'arrow-body-style': ['error', 'as-needed']
  },
  settings: {
  }
};
