import { render, screen } from "@testing-library/react"
import { checkoutComic } from "dh-marvel/test/mocks/checkoutComic"
import Checkout from "./[id].page"


describe("Checkout Page", () => {
    it("should render the Checkout Page Component", () => {
        render(<Checkout comic={checkoutComic}/>)
    })
    it("should render the Checkout Page Component with the issue info", () => {
        render(<Checkout comic={checkoutComic}/>)
        const name = screen.getByText(/amazing spider-man/i)
        expect(name).toBeInTheDocument();
        const price = screen.getByText(/2.99/i)
        expect(price).toBeInTheDocument()
    })
})