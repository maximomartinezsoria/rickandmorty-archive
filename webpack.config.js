const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')
require('dotenv').config()

const isProd = process.env.ENV === 'production'

let entry = ['./src/frontend/index.js']
if (!isProd) {
  entry = [...entry, 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true']
}

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isProd ? 'js/app.[hash].js' : 'js/app.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'js/vendor.[hash].js' : 'js/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition()
            return chunks.some(
              (chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name)
            )
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', 'styl'],
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: isProd ? 'css/app.[hash].css' : 'css/app.css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    !isProd ? new webpack.HotModuleReplacementPlugin() : () => {},
    isProd ? new WebpackManifestPlugin() : () => {},
  ],
}
