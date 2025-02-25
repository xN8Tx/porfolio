import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { NextIntlClientProvider } from "next-intl";
import { Link } from "./";

describe("UI/Link Testing", () => {
  test("should render with _blank target", () => {
    render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={true}>
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    const link = screen.getByTestId<HTMLAnchorElement>("ui-link");
    expect(link.href).toBe("http://localhost/en/link");
    expect(link.textContent).toBe("Children");
    expect(link.target).toBe("_blank");
  });

  test("should render with _self target", () => {
    render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false}>
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    const link = screen.getByTestId<HTMLAnchorElement>("ui-link");
    expect(link.href).toBe("http://localhost/en/link");
    expect(link.textContent).toBe("Children");
    expect(link.target).toBe("_self");
  });

  test("should render with uppercase", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} uppercase={true}>
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with light", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} color="light">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with background", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} color="background">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with default", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} color="default">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with small", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} size="small">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with regular", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} size="regular">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should render with large", () => {
    const tree = render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Link href={"/link"} isExternal={false} size="large">
          Children
        </Link>
      </NextIntlClientProvider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
