import React from 'react'
import { mount } from 'enzyme'
import { StatusFilter } from '../../components/filters/StatusFilter'
import ProviderMock from '../../__mocks__/ProviderMock'

describe('<StatusFilter />', () => {
  const statusFilter = mount(
    <ProviderMock>
      <StatusFilter />
    </ProviderMock>
  )
  const select = statusFilter.find('.Filters__selectStatus')

  test('Component should render', () => {
    expect(statusFilter.length).toEqual(1)
  })

  test('Component should have a select', () => {
    expect(select.length).toEqual(1)
  })

  test('Select should have 4 specific options', () => {
    const options = select.find('option')
    expect(options.length).toEqual(4)

    const expectedTexts = ['Status', 'Alive', 'Dead', 'Unknown']
    const optionTexts = options.map((option) => option.text())
    expect(optionTexts).toEqual(expectedTexts)
  })
})
