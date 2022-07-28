import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'mobx-react'
import appState from '../../store/RootStore'
import Footer from './Footer'

describe('<Footer />', () => {
  const translateMock = jest.fn((text) => text)
  test('it should mount', () => {
    render(
      <Provider {...appState}>
        <Footer
          t={translateMock}
          cookiesAccepted={false}
          cookiesSettingIsOpen={false}
        />
      </Provider>,
    )
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })
})
