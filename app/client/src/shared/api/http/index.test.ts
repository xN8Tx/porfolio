import { HTTP } from "./";

const API_URL = process.env.STRAPI_API_URL ?? "http://localhost:1337/api";
global.fetch = jest.fn();
const http = new HTTP();

describe("HTTP - getUrl", () => {
  it("should return a correct URL without query parameters", () => {
    const url = http["getUrl"]("/test");
    expect(url).toBe(API_URL + "/test");
  });

  it("should return a correct URL with query parameters", () => {
    const url = http["getUrl"]("/test", { populate: ["value"] });
    expect(url).toBe(API_URL + "/test?populate=value");
  });
});

describe("HTTP - createRequestInit", () => {
  it("should create a valid RequestInit object for GET", () => {
    const init = http["createRequestInit"]({
      method: "GET",
    });

    expect(init).toEqual({
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      method: "GET",
    });
  });

  it("should include a body for POST requests", () => {
    const init = http["createRequestInit"]({
      method: "POST",
      data: { key: "value" },
    });

    expect(init.body).toBe(JSON.stringify({ key: "value" }));
  });
});

describe("HTTP - requestHandler", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return JSON on successful response", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 200,
      json: jest.fn().mockResolvedValueOnce({ success: true }),
    });

    const response = await http["requestHandler"]({
      uri: "/test",
      method: "GET",
    });

    expect(fetch).toHaveBeenCalledWith(API_URL + "/test", expect.any(Object));
    expect(response).toEqual({ success: true });
  });

  it("should throw an error for 404 status", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 404,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    await expect(
      http["requestHandler"]({ uri: "/test", method: "GET" }),
    ).rejects.toThrow("404");
  });

  it("should handle custom error messages", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 400,
      json: jest.fn().mockResolvedValueOnce({
        error: { message: "Bad Request" },
      }),
    });

    await expect(
      http["requestHandler"]({ uri: "/test", method: "GET" }),
    ).rejects.toThrow("400");
  });

  it("should handle server errors gracefully", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      status: 500,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    await expect(
      http["requestHandler"]({ uri: "/test", method: "GET" }),
    ).rejects.toThrow("500");
  });
});
