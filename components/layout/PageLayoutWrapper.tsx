import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import { ModalRenderer } from "./ModalRenderer";

interface PageLayoutWrapperProps {
  children: React.ReactNode;
}

export const PageLayoutWrapper = ({ children }: PageLayoutWrapperProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />

      <MainContent>{children}</MainContent>

      <Footer />

      <ModalRenderer />
    </div>
  );
};
