import { render, screen } from "@testing-library/react"
import { checkoutComic } from "dh-marvel/test/mocks/checkoutComic"
import Checkout from "./[id].page"
import userEvent from "@testing-library/user-event";
import { server } from "dh-marvel/test/server";


async function fillForm() {
    const buttonSubmit = screen.getByText("Confirmar");
    const inputFirstName = screen.getByRole("textbox", { name: "Nome" });
    const inputLastName = screen.getByRole("textbox", { name: "Sobrenome" });
    const inputEmail = screen.getByRole("textbox", { name: "E-mail" });
    const inputAddress = screen.getByRole("textbox", { name: "Endereço" });
    const inputAddress2 = screen.getByRole("textbox", { name: "Apartamento, andar, etc" });
    const inputCity = screen.getByRole("textbox", { name: "Cidade" });
    const inputState = screen.getByRole("textbox", { name: "Estado" });
    const inputCep = screen.getByRole("textbox", { name: "CEP" });
    const inputNumberCard = screen.getByRole("textbox", { name: "Nº do cartão" });
    const inputNameOnCard = screen.getByRole("textbox", { name: "Nome no cartão" });
    const inputValidCard = screen.getByRole("textbox", { name: "Validade" });
    const inputCvcCard = screen.getByTestId("cvc");

    await userEvent.type(inputFirstName, "Jonas")
    await userEvent.type(inputLastName, "Antunes")
    await userEvent.type(inputEmail, "antunes.jonas@meuemail.com")
    await userEvent.type(inputAddress, "rua sem saida, 420")
    await userEvent.type(inputAddress2, "casa do caralho")
    await userEvent.type(inputCity, "Cidade")
    await userEvent.type(inputState, "Estado")
    await userEvent.type(inputCep, "24666-420")
    await userEvent.type(inputNumberCard, "4040 4042 4042 4042")
    await userEvent.type(inputNameOnCard, "Jonas Antunes da Maceno")
    await userEvent.type(inputValidCard, "02/2024")
    await userEvent.type(inputCvcCard, "666")
}
beforeAll(() => server.listen())
afterAll(() => server.close())
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
    it("Should render errors menssages when inputs are empty", async () => {
        render(<Checkout comic={checkoutComic} />)
        const buttonSubmit = screen.getByRole("button");
        await userEvent.click(buttonSubmit);
        const messageErrors = await screen.findAllByText("Campo obrigatórios");
        expect(messageErrors[0]).toBeInTheDocument()
    })
    jest.setTimeout(15000)
})