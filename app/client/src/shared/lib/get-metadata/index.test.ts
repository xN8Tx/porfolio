import { createMetadata } from ".";

describe("createMetadata", () => {
  const mockSeoData = {
    title: "Test Title",
    description: "Test Description",
    image: { url: "/test-image.jpg", alternativeText: "Evgeniy Shteyn" },
    preventIndexing: false,
    keywords: "test, metadata",
    attributes: [{ name: "author", content: "Evgeniy" }],
  };

  test("Returns correct metadata", async () => {
    // @ts-expect-error Не полностью заполненые данные у поля image
    expect(createMetadata(mockSeoData)).toEqual({
      title: "Test Title",
      description: "Test Description",
      openGraph: {
        title: "Test Title",
        description: "Test Description",
        images: {
          url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/test-image.jpg`,
          alt: "Evgeniy Shteyn",
        },
      },
      robots: "index",
      twitter: {
        card: "summary_large_image",
        title: "Test Title",
        description: "Test Description",
        images: {
          url: `${process.env.NEXT_PUBLIC_STRAPI_URL}/test-image.jpg`,
          alt: "Evgeniy Shteyn",
        },
      },
      keywords: "test, metadata",
      other: { author: "Evgeniy" },
    });
  });
});
