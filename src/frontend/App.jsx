import React from 'react'
import { Header } from './components/Header'
import { CharactersGrid } from './containers/CharactersGrid'
import { Filters } from './containers/Filters'

export const App = () => (
  <>
    <Header />
    <Filters />
    <CharactersGrid />
  </>
)
