import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./";
import { NextIntlClientProvider } from "next-intl";
import { render } from "@/shared/test-lib";

describe("UI/Button Testing", () => {
  test("should render with _blank target", () => {
    render(
      <Button subtitle={"Subtitle"} href={"/link"} isExternal={true}>
        Children
      </Button>,
    );

    const paragraph = screen.getByTestId("ui-button_paragraph");
    expect(paragraph.textContent).toBe("Children");

    const subtitle = screen.getByTestId("ui-button_subtitle");
    expect(subtitle.textContent).toBe("Subtitle");

    const link = screen.getByTestId<HTMLAnchorElement>("ui-button_link");
    expect(link.href).toBe("http://localhost/en/link");
    expect(link.target).toBe("_blank");
  });

  test("should render with _self target", () => {
    render(
      <NextIntlClientProvider messages={{}} locale="en">
        <Button subtitle={"Subtitle"} href={"/link"} isExternal={false}>
          Children
        </Button>
      </NextIntlClientProvider>,
    );
    const paragraph = screen.getByTestId("ui-button_paragraph");
    expect(paragraph.textContent).toBe("Children");

    const subtitle = screen.getByTestId("ui-button_subtitle");
    expect(subtitle.textContent).toBe("Subtitle");

    const link = screen.getByTestId<HTMLAnchorElement>("ui-button_link");
    expect(link.href).toBe("http://localhost/en/link");
    expect(link.target).toBe("_self");
  });

  test("should correct render small", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        size="small"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render regular", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        size="regular"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render large", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        size="large"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render uppercase", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        uppercase={true}
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render light", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        color="light"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render background", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        color="background"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });

  test("should correct render default", () => {
    const tree = render(
      <Button
        subtitle={"Subtitle"}
        href={"/link"}
        isExternal={false}
        color="default"
      >
        Children
      </Button>,
    );

    expect(tree).toMatchSnapshot();
  });
});
