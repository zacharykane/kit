/* eslint-env node */
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
    snapshotSerializers: ['enzyme-to-json/serializer', 'jest-emotion'],
};
