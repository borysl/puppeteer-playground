module.exports = {
    "env": {
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "rules": {
      "indent": [
        "error",
        2,
        {
          "SwitchCase" : 1
        }
      ],
      "linebreak-style": [
        "error",
        "windows"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-console": 0
    }
  };
  