module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'no-console': 1,
  },
};
