import { render, screen, fireEvent, getByText } from "@testing-library/react"
import FaQ from "./faq.page"

describe("FaQ page", () => {
    it("should render faq component in the faq page", () => {
        render(<FaQ />)
        const question = screen.getByText(/Quantos quadrinhos estão no catálogo\/?/i)
        expect(question).toBeInTheDocument();
    })
    it("should click the accordion button and access answer", async() => {
        render(<FaQ />)
        const button = screen.getAllByRole("button")
        fireEvent.click(button[0])
        const answer = screen.getByText(/Atualmente temos toda a coleção Marvel. Algumas cópias podem ter pouca ou nenhuma disponibilidade no momento. Para mais informações você pode acessar https:\/\/marvel.com/i)
        expect(answer).toBeInTheDocument()
    })
})