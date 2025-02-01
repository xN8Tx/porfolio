import { ErrorComponent } from "@/features/error";

const NotFound = () => {
  return <ErrorComponent statusCode={404} />;
};

export default NotFound;
