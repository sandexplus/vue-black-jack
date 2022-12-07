module.exports = {
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // '@vue/prettier',
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  plugins: [
    'unused-imports',
    // '@typescript-eslint',
    'eslint-plugin-vue'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/no-side-effects-in-computed-properties': 'off',
    'import/no-unresolved': 'off',
    'no-new': 'off',
    'no-undef': 'off',
    'vue/prop-name-casing': 'off'
  }
}
