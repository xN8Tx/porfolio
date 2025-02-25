import { screen } from "@testing-library/react";
import { render } from "@/shared/test-lib";

import { mockStrapiHero, mockStrapiText } from "../../mocks";

import { SectionText } from ".";

describe("Page Generator/Section Text", () => {
  test("shold render", () => {
    render(<SectionText {...mockStrapiText} />);

    const title = screen.getByTestId("page-text_title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockStrapiText.title);

    const subtitle = screen.getByTestId("page-text_content");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(mockStrapiText.content);

    const button = screen.getByTestId("page-text_button");
    expect(button).toBeInTheDocument();
  });
  test("should match snapshot", () => {
    const tree = render(<SectionText {...mockStrapiText} />);

    expect(tree).toMatchSnapshot();
  });
});
