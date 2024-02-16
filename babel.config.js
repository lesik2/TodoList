module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@hooks": "./src/hooks",
          "@types": "./src/types",
          "@assets": "./src/assets"
        }
      }
    ],
    'react-native-reanimated/plugin',
  ]
};