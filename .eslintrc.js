module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        // "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": ["error", "always"]
    },
    "globals": {
        Form: true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    }
};
