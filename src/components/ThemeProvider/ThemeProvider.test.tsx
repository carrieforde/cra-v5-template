import { render } from "@testing-library/react";
import { ThemeProvider } from "./ThemeProvider";

jest.mock("./useDarkMode", () => ({
  useDarkMode: jest.fn(() => false),
}));

describe("ThemeProvider", () => {
  it("should render the theme provider", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <p>Theme</p>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
