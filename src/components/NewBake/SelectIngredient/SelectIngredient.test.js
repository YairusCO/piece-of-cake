import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SelectIngredient from './SelectIngredient'

describe('<SelectIngredient />', () => {
	test('it should mount', () => {
		render(<SelectIngredient />)

		const selectIngredient = screen.getByTestId('SelectIngredient')

		expect(selectIngredient).toBeInTheDocument()
	})
})
