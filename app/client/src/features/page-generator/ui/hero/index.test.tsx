import { screen } from "@testing-library/react";
import { render } from "@/shared/test-lib";

import { mockStrapiHero } from "../../mocks";

import { Hero } from ".";

describe("Page Generator/Hero", () => {
  test("shold render", () => {
    render(<Hero {...mockStrapiHero} />);

    const title = screen.getByTestId("page-hero_title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockStrapiHero.title);

    const subtitle = screen.getByTestId("page-hero_subtitle");
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveTextContent(mockStrapiHero.subtitle);
  });
  test("should match snapshot", () => {
    const tree = render(<Hero {...mockStrapiHero} />);

    expect(tree).toMatchSnapshot();
  });
});
