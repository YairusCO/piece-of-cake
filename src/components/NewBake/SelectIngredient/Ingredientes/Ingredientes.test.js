import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Ingredientes from './Ingredientes'

describe('<Ingredientes />', () => {
	test('it should mount', () => {
		render(<Ingredientes />)

		const ingredientes = screen.getByTestId('Ingredientes')

		expect(ingredientes).toBeInTheDocument()
	})
})
