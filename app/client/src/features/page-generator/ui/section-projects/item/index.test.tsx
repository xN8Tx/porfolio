import { screen } from "@testing-library/react";
import { render } from "@/shared/test-lib";

import { mockStrapiProjects } from "@/features/page-generator/mocks";
import git from "@/shared/mocks/lottie/dark/git.json";

import { useIcon } from "@/shared/hooks";
import { Item } from ".";

jest.mock("@/shared/hooks", () => ({
  useIcon: jest.fn(),
}));

describe("Page Genretor/Section Projects - Item", () => {
  test("shold render without github link and with demo availible", () => {
    (useIcon as jest.Mock).mockReturnValue(git);
    // @ts-expect-error Mock doesnt contain formats in projects.preview
    const tree = render(<Item project={mockStrapiProjects.projects[0]} />);
    expect(tree).toMatchSnapshot();

    const github = screen.queryByTestId("page-projects_github_link");
    expect(github).not.toBeInTheDocument();

    const demo = screen.getByTestId("page-projects_demo_link");
    expect(demo).toBeInTheDocument();
  });

  test("shold render with github link and with demo not availible", () => {
    (useIcon as jest.Mock).mockReturnValue(git);
    // @ts-expect-error Mock doesnt contain formats in projects.preview
    const tree = render(<Item project={mockStrapiProjects.projects[1]} />);
    expect(tree).toMatchSnapshot();

    const github = screen.getByTestId("page-projects_github_link");
    expect(github).toBeInTheDocument();

    const demo = screen.queryByTestId("page-projects_demo_not_availible");
    expect(demo).toBeInTheDocument();
  });

  test("shold render with github link and with demo availible", () => {
    (useIcon as jest.Mock).mockReturnValue(git);
    // @ts-expect-error Mock doesnt contain formats in projects.preview
    const tree = render(<Item project={mockStrapiProjects.projects[2]} />);
    expect(tree).toMatchSnapshot();

    const github = screen.getByTestId("page-projects_github_link");
    expect(github).toBeInTheDocument();

    const demo = screen.getByTestId("page-projects_demo_link");
    expect(demo).toBeInTheDocument();
  });

  test("shold render without github link and with demo not availible", () => {
    (useIcon as jest.Mock).mockReturnValue(git);
    // @ts-expect-error Mock doesnt contain formats in projects.preview
    const tree = render(<Item project={mockStrapiProjects.projects[3]} />);
    expect(tree).toMatchSnapshot();

    const github = screen.queryByTestId("page-projects_github_link");
    expect(github).not.toBeInTheDocument();

    const demo = screen.getByTestId("page-projects_demo_not_availible");
    expect(demo).toBeInTheDocument();
  });
});
