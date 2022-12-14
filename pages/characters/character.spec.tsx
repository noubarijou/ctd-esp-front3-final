import { render, screen } from "@testing-library/react"
import { characterDetails } from "dh-marvel/test/mocks/characterDetails"
import CharacterInfo from "./[id].page"

describe("Character Details Page", () => {
    it("should render the Character Info component", () => {
        render(<CharacterInfo data={characterDetails}/>)
    })
 /*    it("should bring the character info", () => {
        const name = screen.getAllByText(/deadpool/i)
        expect(name[0]).toBeInTheDocument()
    }) */
})