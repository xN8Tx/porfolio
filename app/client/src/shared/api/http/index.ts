"server-only";
import { notFound } from "next/navigation";
import qs from "qs";

import type {
  CreateRequestInitMethodParametrs,
  HTTPQuery,
  RequestMethodParametrs,
} from "@/shared/types";

const API_URL = process.env.API_URL ?? "http://localhost:1337/api";

const statusTextByCode = {
  "400": 400,
  "401": 401,
  "403": 403,
  "500": 500,
};

export class HTTP {
  protected baseUrl: string;
  protected baseRequestInit: RequestInit;

  constructor(baseRequestInit?: RequestInit) {
    this.baseUrl = API_URL;
    this.baseRequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
      ...baseRequestInit,
    };
  }
  protected getUrl(uri: string, query?: HTTPQuery) {
    const searchParams = qs.stringify(query, { arrayFormat: "repeat" });
    const base = `${this.baseUrl}${uri}`;
    return searchParams ? `${base}?${searchParams}` : base.toString();
  }

  protected createRequestInit({
    method,
    headers = {},
    data,
  }: CreateRequestInitMethodParametrs) {
    const { headers: baseHeaders, ...base } = this.baseRequestInit;
    const body = data ? JSON.stringify(data) : null;

    return {
      ...base,
      headers: {
        ...baseHeaders,
        ...headers,
      },
      method,
      ...(["PUT", "POST"].includes(method) && body && { body }),
    };
  }

  protected requestHandler = async (
    params: RequestMethodParametrs & Record<"method", string>,
  ) => {
    try {
      const { uri, query, headers, method, data } = params;

      const url = this.getUrl(uri, query);
      const requestInit = this.createRequestInit({
        headers,
        method,
        data,
      });

      const response = await fetch(url, requestInit);
      const status = response.status;

      const json = await response.json();

      if (status >= 400) {
        console.error("[HTTP] Error message:", json?.error?.message);
        console.error("[HTTP] URL:", url);
        throw new Error(status.toString());
      }

      return json;
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message;

        // Not found handler
        if (message === "404") {
          notFound();
        }

        // Another errors code handlers
        if (message in statusTextByCode) {
          throw new Error(
            statusTextByCode[
              message as keyof typeof statusTextByCode
            ].toString(),
          );
        }

        console.error("[HTTP] Error message:", message);
      }

      throw new Error(statusTextByCode[500].toString());
    }
  };
}
