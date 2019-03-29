module.exports = {
    moduleNameMapper: {
        '@jahia/(.*)': '<rootDir>/node_modules/@jahia/$1/lib/$1.umd.js',
        '\\.(css|less)$': '<rootDir>/node_modules/@jahia/test-framework/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: [
        '<rootDir>/node_modules/@jahia/test-framework/setupTests.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/main/resources/javascript/',
        '<rootDir>/node/',
        '<rootDir>/node_modules/',
        '<rootDir>/target/'
    ],
    verbose: true
};