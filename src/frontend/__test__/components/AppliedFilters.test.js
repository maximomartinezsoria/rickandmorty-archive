import React from 'react'
import { mount } from 'enzyme'
import { AppliedFilters } from '../../components/filters/AppliedFilters'
import ProviderMock from '../../__mocks__/ProviderMock'

describe('<AppliedFilters />', () => {
  const appliedFilters = mount(
    <ProviderMock>
      <AppliedFilters />
    </ProviderMock>
  )

  test('Component should render', () => {
    expect(appliedFilters.length).toEqual(1)
  })

  test('Component should have an specific title', () => {
    const title = appliedFilters.find('.AppliedFilters__title').text()
    expect(title).toEqual('Filters:')
  })

  function getLabelTextAt(index) {
    return appliedFilters.find('.AppliedFilters__label').at(index).text()
  }

  test('Should show name query', () => {
    const nameQueryLabel = getLabelTextAt(0)
    expect(nameQueryLabel).toEqual('rick')
  })

  test('Should show status query', () => {
    const statusQueryLabel = getLabelTextAt(1)
    expect(statusQueryLabel).toEqual('Dead')
  })
})
