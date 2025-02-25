import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Paragraph } from "./";

describe("UI/Paragraph Testing", () => {
  test("should render", () => {
    render(<Paragraph>Children</Paragraph>);
    const heading = screen.getByTestId("ui-paragraph");
    expect(heading.textContent).toBe("Children");
  });

  test("should render with regular", () => {
    const tree = render(<Paragraph size="regular">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with small", () => {
    const tree = render(<Paragraph size="small">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with large", () => {
    const tree = render(<Paragraph size="large">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with default", () => {
    const tree = render(<Paragraph color="default">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with light", () => {
    const tree = render(<Paragraph color="light">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
  test("should render with background", () => {
    const tree = render(<Paragraph color="background">Children</Paragraph>);
    expect(tree).toMatchSnapshot();
  });
});
