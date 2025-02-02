import { RequestMethodParametrs, StrapiResponse } from "@/shared/types";
import { HTTP } from "../http";

class PublicHttp extends HTTP {
  constructor() {
    super({
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN ?? ""}`,
        "Content-Type": "application/json",
      },
    });
  }

  public get = async <T>(
    params: RequestMethodParametrs,
  ): Promise<StrapiResponse<T>> => {
    return await this.requestHandler({
      ...params,
      method: "GET",
    });
  };

  public post = async <T>(
    params: RequestMethodParametrs,
  ): Promise<StrapiResponse<T>> => {
    return await this.requestHandler({
      ...params,
      method: "POST",
    });
  };

  public put = async <T>(
    params: RequestMethodParametrs,
  ): Promise<StrapiResponse<T>> => {
    return await await this.requestHandler({
      ...params,
      method: "PUT",
    });
  };

  public del = async <T>(
    params: RequestMethodParametrs,
  ): Promise<StrapiResponse<T>> => {
    return await this.requestHandler({
      ...params,
      method: "DELETE",
    });
  };
}

const publicHTTP = new PublicHttp();

export { publicHTTP };
