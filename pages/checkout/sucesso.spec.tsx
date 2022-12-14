import { render, screen } from "@testing-library/react"
import Sucesso from "./sucesso.page"
import { CheckoutContext } from "../../context/checkout.context"
import {checkout} from '../../test/mocks/checkoutSuccess'


describe("Success Page", () => {
    it("should render the Success Page", () => {
        render(<Sucesso />)
    })
    it("should render the Success Page with null info", () => {
        render(<Sucesso />)
        const congrats = screen.getByText(/eesh/i)
        expect(congrats).toBeInTheDocument()
    })
    it("should render Success Page with success info", () => {
        const handleCheckout = jest.fn()
        render(<CheckoutContext.Provider value={{ checkout, handleCheckout }}>
            <Sucesso />
        </CheckoutContext.Provider>)
    })

})