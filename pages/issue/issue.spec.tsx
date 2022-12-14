import { render, screen } from '@testing-library/react'
import {issue} from '../../test/mocks/issue'
import IssueDetailsPage from './[id].page'

describe("Issue Detail Page", () => {
    it("should render the IssueDetailsPage Component", () => {
        render(<IssueDetailsPage data={issue}/>)
    })
    it("should bring the issue information",() => {
        render(<IssueDetailsPage data={issue} />)
        const title = screen.getByAltText(/new x-men/i)
        const price = screen.getByText(/2.25/i)
        const stock = screen.getByText(/4/i)
        expect(title).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(stock).toBeInTheDocument()
    })
})