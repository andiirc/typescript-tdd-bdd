module.exports = {
    roots: ['<rootDir>/__tests__'],
    testEnvironment: "node",
    verbose: true,
    moduleFileExtensions: [
        "js",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    testMatch: [
        "<rootDir>/__test__/**/*.(test).{js,jsx,ts,tsx}",
        "<rootDir>/__test__/**/?(*.)(spec|test).{js,jsx,ts,tsx}",
        "**/__tests__/**/*.(js|ts|tsx)",     
        "**/?(*.)+(spec|test).(js|ts|tsx)"
    ],
    testFileExtensions: ["es6", "js"],
    moduleFileExtensions: ["js", "json", "es6"],
    globals: {
        'ts-jest': {
            diagnostics: false,
            isolatedModules: true,
            tsConfig: {
                target: 'esnext',
            }
        },
    }
}