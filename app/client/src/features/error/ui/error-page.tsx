"use client";

import { ErrorComponent } from "./error-component";
import { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <ErrorComponent statusCode={Number(error.message) ?? 500} />;
};

export { ErrorPage };
