import { render, screen } from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";
const IndexPageProps = {
    data: {
      results: []
    }
  
}

describe("IndexPage", () => {
  describe("when rendering default", () => {
    it("should render the title", () => {
      render(<Index data={IndexPageProps}/>);
      const title = screen.getByText("Marvel HQ");
      expect(title).toBeInTheDocument();
    });
  });
});
