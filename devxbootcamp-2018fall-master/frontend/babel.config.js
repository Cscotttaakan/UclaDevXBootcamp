const createConfig = (api) => {
  api.cache.never();
  return {
    presets: [
      [
        '@babel/env',
        {
          loose: true,
          useBuiltIns: false,
        },
      ],
      '@babel/react',
    ],
    plugins: ['@babel/syntax-dynamic-import', 'transform-class-properties'],
    env: {
      test: {
        presets: [['@babel/env'], '@babel/react'],
      },
      web: {
        presets: [
          [
            '@babel/env',
            {
              targets: {
                browsers: [
                  'last 2 Chrome versions',
                  'last 2 Firefox versions',
                  'last 1 Safari versions',
                  'last 1 ChromeAndroid versions',
                  'last 1 Edge versions',
                ],
              },
            },
          ],
        ],
      },
    },
  };
};

module.exports = createConfig;
