import { render } from "@/shared/test-lib";

import { mockStrapiProjects } from "../../mocks";
import git from "@/shared/mocks/lottie/dark/git.json";

import { SectionProjects } from ".";
import { screen } from "@testing-library/dom";
import { useIcon } from "@/shared/hooks";

jest.mock("@/shared/hooks", () => ({
  useIcon: jest.fn(),
}));

describe("Page Genretor/Section Projects", () => {
  test("shold render", () => {
    (useIcon as jest.Mock).mockReturnValue(git);

    // @ts-expect-error Mock doesnt contain formats in projects.preview
    render(<SectionProjects {...mockStrapiProjects} />);

    const component = screen.getByTestId("page-projects");
    expect(component).toBeInTheDocument();

    const items = screen.getAllByTestId("page-projects_item");
    expect(items.length).toBe(mockStrapiProjects.projects.length);
  });

  test("shold match snapshot", () => {
    (useIcon as jest.Mock).mockReturnValue(git);
    // @ts-expect-error Mock doesnt contain formats in projects.preview
    const tree = render(<SectionProjects {...mockStrapiProjects} />);
    expect(tree).toMatchSnapshot();
  });
});
