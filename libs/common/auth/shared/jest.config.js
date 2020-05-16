module.exports = {
  name: 'common-auth-shared',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/auth/shared',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
