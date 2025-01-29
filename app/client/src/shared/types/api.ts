export interface HTTPQuery {
  populate?: string[];
  sort?: string[];
  fields?: string[] | { [key: string]: unknown };
  filters?: { [key: string]: unknown };
  locale?: string;
  pagination?: {
    page: number;
    pageSize: number;
  };
}

export interface RequestMethodParametrs {
  uri: string;
  query?: HTTPQuery;
  headers?: HeadersInit;
  data?: unknown;
}

export interface CreateRequestInitMethodParametrs
  extends Omit<RequestMethodParametrs, "uri" | "query"> {
  method: string;
}

export interface StrapiResponse<T> {
  data: T;
  error?: {
    message: string;
    status: number;
    name: string;
  };
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
