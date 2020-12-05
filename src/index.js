import './styles/index.styl'
import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

function renderApp() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  )
}

renderApp()
if (module.hot) {
  module.hot.accept('./App', () => renderApp())
}
