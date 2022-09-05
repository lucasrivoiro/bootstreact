const path = require('path');
const tsConfigPathPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, argv) {
    return {
        mode: env.debug ? 'development' : 'production',
        devtool: 'source-map',
        target: 'web',
        entry: {
            app: path.resolve(__dirname, 'src/index.tsx'),
        },
        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname, 'dist'),
            assetModuleFilename: './font/[name][ext]',
        },
        plugins: [
            new ESLintPlugin({
                context: path.resolve(__dirname),
                extensions: ["js", "jsx", "ts", "tsx"],
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "[id].css",
            }),
        ],
        resolve: {
            extensions: [".scss", ".js", ".jsx", ".tsx", ".ts"],
            alias: {
                Component: path.resolve(__dirname, 'src/Component/'),
            },
            plugins: [
                new tsConfigPathPlugin()
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|ts)x?$/i,
                    exclude: /[\\/]node_modules[\\/]/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [ '@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript' ]
                            }
                        },
                        { loader: 'source-map-loader', options: {} }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [ MiniCssExtractPlugin.loader, "css-loader" ]
                },
                {
                    test: /\.scss$/,
                    use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
                },
            ]
        },
    }
}
