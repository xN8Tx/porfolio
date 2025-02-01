import { getMessages } from "next-intl/server";
import { Suspense } from "react";

import { LayoutGenerator } from "@/features/layout-generator";
import { Loader, SuspenceFallback } from "@/widgets";
import { ErrorComponent } from "@/features/error";
import { Provider } from "./provider";

const NotFound = async () => {
  const messages = await getMessages();

  return (
    <html lang="ru">
      <body>
        <Provider messages={messages} locale="ru">
          <Loader />
          <Suspense fallback={<SuspenceFallback />}></Suspense>
          <LayoutGenerator locale="ru">
            <ErrorComponent statusCode={404} />
          </LayoutGenerator>
        </Provider>
      </body>
    </html>
  );
};

export default NotFound;
