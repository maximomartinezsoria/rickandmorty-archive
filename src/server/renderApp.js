import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { App } from '../frontend/App'
import rootReducer from '../frontend/store/reducers'
import createHtmlStructure from './createHtmlStructure'

export default function renderApp(req, res) {
  const store = createStore(rootReducer)
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  res.send(createHtmlStructure(html, req.hashManifest))
}
