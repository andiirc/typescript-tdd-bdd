module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: "node",
    verbose: true,
    moduleFileExtensions: [
        "js",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    preset: 'ts-jest',
    testMatch: [
        "**/__tests__/**/*.(js|ts|tsx)",     
        "**/?(*.)+(spec|test).(js|ts|tsx)"
    ],
    transform: {
        '^.+\\.(ts|tsx)': 'ts-jest'
    },
    
}