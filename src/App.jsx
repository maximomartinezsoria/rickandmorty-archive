import React from 'react'
import { Header } from './components/Header'
import { getCharacters } from './services/Character'

getCharacters()

export const App = () => <Header />
