module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'plugin:vue/vue3-recommended',
        '@vue/prettier',
        'plugin:prettier/recommended'
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // 要求使用 === 和 !==
        eqeqeq: 2,
        // 禁止使用 var
        'no-var': 'error',
        // 禁用未声明的变量
        'no-undef': 2,
        // 强制使用驼峰命名
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
    }
}
