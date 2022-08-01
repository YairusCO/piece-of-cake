import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Intro from './Intro'
import { Provider } from 'mobx-react'
import appState from '../../../store/RootStore'
import { fireEvent } from '@testing-library/dom'

describe('<Intro />', () => {
  const mockClickAnimationIntroCarousel = jest.fn()
  const translateMock = jest.fn((text) => text)

  test('it should mount', () => {
    render(
      <Provider {...appState}>
        <Intro
          t={translateMock}
          clickAnimationIntroCarousel={mockClickAnimationIntroCarousel}
        />
      </Provider>,
    )
    const intro = screen.getByTestId('Intro')
    expect(intro).toBeInTheDocument()
  })

  test('Main button should be in document', () => {
    render(
      <Provider {...appState}>
        <Intro
          t={translateMock}
          clickAnimationIntroCarousel={mockClickAnimationIntroCarousel}
        />
      </Provider>,
    )
    const mainBtn = screen.getByTestId('mainBtn')
    expect(mainBtn).toBeInTheDocument()
  })

  test('Main button should be enabled', () => {
    render(
      <Provider {...appState}>
        <Intro
          t={translateMock}
          clickAnimationIntroCarousel={mockClickAnimationIntroCarousel}
        />
      </Provider>,
    )
    const mainBtn = screen.getByTestId('mainBtn')
    expect(mainBtn).toBeEnabled()
  })

  test('Main button should move to next stage on click', () => {
    const mockBeforeNextStage = jest.fn()
    render(
      <Provider {...appState}>
        <Intro
          t={translateMock}
          beforeMovingToNextStep={mockBeforeNextStage}
          clickAnimationIntroCarousel={mockClickAnimationIntroCarousel}
        />
      </Provider>,
    )
    const mainBtn = screen.getByTestId('mainBtn')
    fireEvent.click(mainBtn)
    expect(mockBeforeNextStage).toBeCalled()
  })
})
