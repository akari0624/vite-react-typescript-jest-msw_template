import { render, screen, act } from '@testing-library/react'
import App from '../App'

test('Renders main page correctly, and have a member card on it', async () => {
  await act(async () => {
  render(<App />)
  })

  screen.getByLabelText('member card')
  
})
