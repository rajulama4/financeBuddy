module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
          ],
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@assets': './assets',
            '@context': './context',
            '@hooks': './hooks',
            '@styles': './styles',
          },
        },
      ],
      'react-native-reanimated/plugin', // Keep this last
    ],
  };
};