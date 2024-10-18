import { RootProvider } from "@/ui/base";
import { Wrapper } from "@/ui/home";

const Home = async () => {
  return (
    <RootProvider language="ru">
      <Wrapper />
    </RootProvider>
  );
};

export default Home;
