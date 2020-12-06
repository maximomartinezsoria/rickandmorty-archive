import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../store/reducers'

const store = createStore(rootReducer)

const ProviderMock = (props) => <Provider store={store}>{props.children}</Provider>

export default ProviderMock
