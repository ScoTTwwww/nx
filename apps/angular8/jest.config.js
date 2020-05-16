module.exports = {
  name: 'angular8',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular8',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
