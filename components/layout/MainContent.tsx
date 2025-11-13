const MainContent = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className="flex-1 flex flex-col items-center px-8 py-10">
      {children}
    </section>
  );
};

export default MainContent;
