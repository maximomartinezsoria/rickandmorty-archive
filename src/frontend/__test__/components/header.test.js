import React from 'react'
import { mount } from 'enzyme'
import { Header } from '../../components/Header'

describe('<Header />', () => {
  const header = mount(<Header />)

  test('Component should render', () => {
    expect(header.length).toEqual(1)
  })

  test('Component should have the title', () => {
    const title = header.find('.Header__title').text()
    expect(title).toEqual('Rick and Morty Archive')
  })
})
