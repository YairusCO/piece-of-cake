import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import MessageCarousel from './MessageCarousel'

describe('<MessageCarousel/>', () => {
  const translateMock = jest.fn((text) => text)

  test('it should mount', () => {
    render(<MessageCarousel t={translateMock} />)
    const messageCarousel = screen.getByTestId('messageCarousel')
    expect(messageCarousel).toBeInTheDocument()
  })
})
