// "@semantic-release/changelog": "^3.0.6",
// "@semantic-release/git": "^7.0.18",
// "@semantic-release/release-notes-generator": "^7.3.5",

module.exports = {
  plugins: [
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['dist/**/*.{js,css}', 'docs', 'package.json'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
