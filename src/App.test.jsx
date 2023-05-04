import { render, screen } from "@testing-library/react"
import Home from "./components/Home"

it("Should contain 'Click Me!'", () => {
    render(<Home />)
    const message = screen.queryByText(/Click Here!/i)
    expect(message).toBeVisible
})







// import { render, screen } from "@testing-library/react"
// import App from "./App"

// it("Should have 'Lives in the sea!", () => {
//     render(<App />)
//     const message = screen.queryByText(/Hello World!/i)
//     expect(message).toBeVisible()
// })