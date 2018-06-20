module.exports = {
    "env": {
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "ecmaVersion": 2017,
      "sourceType": "module",
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "plugins": ["jest"],
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
  