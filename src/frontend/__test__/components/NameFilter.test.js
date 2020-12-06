import React from 'react'
import { mount } from 'enzyme'
import { NameFilter } from '../../components/filters/NameFilter'
import ProviderMock from '../../__mocks__/ProviderMock'

describe('<NameFilter />', () => {
  const nameFilter = mount(
    <ProviderMock>
      <NameFilter />
    </ProviderMock>
  )
  const input = nameFilter.find('.NameFilter input')

  test('Component should render', () => {
    expect(nameFilter.length).toEqual(1)
  })

  test('Component should have an input', () => {
    expect(input.length).toEqual(1)
  })

  test('Input should have a placeholder text', () => {
    const inputPlaceholder = input.prop('placeholder')
    expect(inputPlaceholder).toEqual('Search by name')
  })
})
