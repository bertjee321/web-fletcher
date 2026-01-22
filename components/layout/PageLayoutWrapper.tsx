import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export const PageLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </main>
  );
};
