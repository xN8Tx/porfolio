import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Heading } from "./";

describe("UI/Heading Testing", () => {
  test("should render", () => {
    render(<Heading>Children</Heading>);
    const heading = screen.getByTestId("ui-heading");
    expect(heading.textContent).toBe("Children");
  });
  test("should render with regular", () => {
    const tree = render(<Heading size="regular">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with small", () => {
    const tree = render(<Heading size="small">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with large", () => {
    const tree = render(<Heading size="large">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with default", () => {
    const tree = render(<Heading color="default">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with light", () => {
    const tree = render(<Heading color="light">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with background", () => {
    const tree = render(<Heading color="background">Children</Heading>);
    expect(tree).toMatchSnapshot();
  });
});
