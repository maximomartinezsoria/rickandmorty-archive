import webpack from 'webpack'

export default function developmentConfig(app) {
  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig)
  const webpackServerConfig = { publicPath: webpackConfig.output.publicPath }

  app.use(webpackDevMiddleware(compiler, webpackServerConfig))
  app.use(webpackHotMiddleware(compiler))
}
