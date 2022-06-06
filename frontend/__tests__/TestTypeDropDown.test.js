import React from 'react'
import '@testing-library/jest-dom'
import TestTypeDropDown from '../src/components/TestTypeDropdown'
import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'

it('should correctly set default option', () => {
  render(<TestTypeDropDown />)
  expect(screen.getByRole('option', {name: 'None'}).selected).toBe(true)
})

it('should display the correct number of options', () => {
  render(<TestTypeDropDown />)
  expect(screen.getAllByRole('option').length).toBe(6)
})

it('should allow user to change test', () => {
  render(<TestTypeDropDown />)
  userEvent.selectOptions(
    // Find the select element, like a real user would.
    screen.getByRole('combobox'),
    // Find and select the Session Based Testing option, like a real user would.
    screen.getByRole('option', {name: 'Session Based Testing'}),
  )
  expect(screen.getByRole('option', {name: 'Session Based Testing'}).selected).toBe(true)
})