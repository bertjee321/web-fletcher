import { ModalContainer } from "../ui/ModalContainer";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

interface PageLayoutWrapperProps {
  children: React.ReactNode;
  modal?: {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    byline?: string;
    content?: React.ReactNode;
  };
}

export const PageLayoutWrapper = ({
  children,
  modal,
}: PageLayoutWrapperProps) => {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8f5ef] text-[#2c2a24] font-sans">
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      {modal && (
        <ModalContainer
          isOpen={modal.isOpen}
          onClose={modal.onClose}
          title={modal.title}
          byline={modal.byline}
        >
          {modal.content}
        </ModalContainer>
      )}
    </main>
  );
};
