import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import initialStateMock from '../__mocks__/initialStateMock'
import rootReducer from '../store/reducers'

const store = createStore(rootReducer, initialStateMock)

const ProviderMock = (props) => <Provider store={store}>{props.children}</Provider>

export default ProviderMock
