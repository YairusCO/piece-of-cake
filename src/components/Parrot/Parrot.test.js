import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'mobx-react'
import appState from '../../store/RootStore'

import Parrot from './Parrot'

describe('<Parrot/>', () => {
  const translateMock = jest.fn((text) => text)
  const options = {
    forceSegments: true,
    options: {
      animationData: null,
      loop: false,
      autoplay: false,
    }
  }
  test('it should mount', () => {
    render(
      <Provider {...appState}>
        <Parrot t={translateMock} options={options}/>
      </Provider>,
    )
    const parrot = screen.getByTestId('parrot')
    expect(parrot).toBeInTheDocument()
  })
})
