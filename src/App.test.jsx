import { render, screen } from "@testing-library/react"
import App from "./App"

// import matchers from "@testing-library/jest-dom"
// expect.extend(matchers)

it("Should have 'Lives in the sea!", () => {
    // render(<App />)
    // const message = screen.queryByText(/Patrick/i)
    // expect(message).toBeVisible()
    render(<App />)
    const message = screen.queryByText(/Lives in the zeeee/i)
    expect(message).toBeVisible()
})