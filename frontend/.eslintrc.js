module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
   },
   extends: [
      'react-app',
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
   ],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },

   plugins: ['react', 'prettier'],
   rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': [
         'error',
         {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
         },
      ],
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
}
