import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'
import { Provider } from 'mobx-react'
import appState from '../../store/RootStore'
describe('<Header />', () => {
  const translateMock = jest.fn((text) => text)
  const mockUserInfo = { details: { role: { value: 'dummy' } } }
  test('it should mount', () => {
    render(<Header t={translateMock} userInfo={mockUserInfo} />)
    const header = screen.getByTestId('Header')
    expect(header).toBeInTheDocument()
  })

  test('Helper Dialog should not be in the document', () => {
    render(<Header t={translateMock} userInfo={mockUserInfo} />)
    const header = screen.getByTestId('Header')
    const helperDialog = header.querySelector('.help-dialog')
    expect(helperDialog).not.toBeInTheDocument()
  })

  test('Helper Dialog should be in the document', () => {
    const mockHelpDialogIsOpen = true
    render(
      <Provider {...appState}>
        <Header
          t={translateMock}
          isHelpDialogModalOpen={mockHelpDialogIsOpen}
          userInfo={mockUserInfo}
        />
      </Provider>,
    )
    const header = screen.getByTestId('Header')
    const helperDialog = header.querySelector('.help-dialog')
    expect(helperDialog).toBeInTheDocument()
  })

  test('toggleHelpDialogOpenState FN has been called', () => {
    const mockOpenHelpDialog = jest.fn()
    render(
      <Provider {...appState}>
        <Header
          t={translateMock}
          toggleHelpDialogOpenState={mockOpenHelpDialog}
          userInfo={mockUserInfo}
        />
      </Provider>,
    )
    const header = screen.getByTestId('Header')
    const button = header.querySelector('.help-btn')
    fireEvent.click(button)
    expect(mockOpenHelpDialog).toHaveBeenCalled()
  })
})
