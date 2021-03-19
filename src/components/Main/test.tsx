import { render, screen } from '@testing-library/react'

import Main from './Main'

describe('<Main />', () => {
  it('it should be able to render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Main component/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
