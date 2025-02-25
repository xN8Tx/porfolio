import { screen } from "@testing-library/react";
import { render } from "@/shared/test-lib";

import { mockStrapiSkills } from "../../mocks";

import { SectionSkills } from ".";

describe("Page Genretor/Section Skills", () => {
  test("shold render", () => {
    render(<SectionSkills {...mockStrapiSkills} />);

    const component = screen.getByTestId("page-skills");
    expect(component).toBeInTheDocument();
  });

  test("shold match snapshot", () => {
    const tree = render(<SectionSkills {...mockStrapiSkills} />);
    expect(tree).toMatchSnapshot();
  });

  test("shold render with correct order", () => {
    render(<SectionSkills {...mockStrapiSkills} />);

    const items = screen.getAllByTestId("page-skills_item");
    expect(items.length).toBe(mockStrapiSkills.skills.length);

    expect(items[0].textContent?.startsWith("01")).toBeTruthy();
    expect(items[4].textContent?.startsWith("05")).toBeTruthy();
    expect(items[5].textContent?.startsWith("06")).toBeTruthy();
    expect(items[9].textContent?.startsWith("10")).toBeTruthy();
  });
});
