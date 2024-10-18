import { RootProvider } from "@/ui/base";
import { Wrapper } from "@/ui/home";

const Home = async () => {
  return (
    <RootProvider language="en">
      <Wrapper />
    </RootProvider>
  );
};

export default Home;
