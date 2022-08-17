import { render } from "@testing-library/react";
import { GlobalStyles } from "./GlobalStyles";

describe("GlobalStyles", () => {
  it("should render the global styles", () => {
    const { asFragment } = render(<GlobalStyles />);

    expect(asFragment()).toMatchSnapshot();
  });
});
