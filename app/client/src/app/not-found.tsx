import { RootProvider } from "@/ui/base";
import { Wrapper } from "@/ui/not-found";

const NotFound = () => {
  return (
    <RootProvider language="ru">
      <Wrapper />
    </RootProvider>
  );
};

export default NotFound;
