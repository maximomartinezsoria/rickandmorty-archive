import React from 'react'
import { mount } from 'enzyme'
import { OrderSelect } from '../../components/filters/OrderSelect'
import ProviderMock from '../../__mocks__/ProviderMock'

describe('<OrderSelect />', () => {
  const orderSelect = mount(
    <ProviderMock>
      <OrderSelect />
    </ProviderMock>
  )

  const select = orderSelect.find('select')

  test('Component should render', () => {
    expect(orderSelect.length).toEqual(1)
  })

  test('Component should have an specific title', () => {
    const title = orderSelect.find('.OrderBy__title').text()
    expect(title).toEqual('Order by:')
  })

  test('Component should have a select', () => {
    expect(select.length).toEqual(1)
  })

  test('Select should have 2 specific options', () => {
    const options = select.find('option')
    expect(options.length).toEqual(2)

    const expectedTexts = ['Popular', 'Name']
    const optionTexts = options.map((option) => option.text())
    expect(optionTexts).toEqual(expectedTexts)
  })
})
