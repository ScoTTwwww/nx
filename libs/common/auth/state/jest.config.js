module.exports = {
  name: 'common-auth-state',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/auth/state',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
