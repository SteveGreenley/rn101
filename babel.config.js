module.exports = {
  presets: [
    'module:@react-native/babel-preset',
  ],
  plugins: [
    'react-native-reanimated/plugin', // This must be the last item in the plugins array.
  ],
};
