export default function MainContent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex flex-col items-center px-8 py-10">
      {children}
    </main>
  );
}
