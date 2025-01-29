import { PageManager } from "@/features/page-generator";
import { setRequestLocale } from "next-intl/server";

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  setRequestLocale(locale);
  return <PageManager locale={locale} slug="homepage" />;
};

export default Home;
