module.exports = {
    plugins: [
        // '@babel/plugin-proposal-export-default-from'
        // Fixes for loose issue from https://github.com/rails/webpacker/issues/3008
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ],
    presets: [
        [
            '@lljj/babel-preset-app',
            {
                useBuiltIns: false,
                regenerator: true,
                helpers: true
            }
        ]
    ]
};
