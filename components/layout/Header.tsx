const Header = () => {
  return (
    <header className="border-b border-[#d3c9b4] bg-[#faf7f1] px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-serif tracking-wide text-[#3f3a2f]">
        🏹 Web-Fletcher
      </h1>

      <nav className="space-x-6 text-sm">
        <a href="#" className="hover:text-[#8b7355] transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-[#8b7355] transition-colors">
          Sessions
        </a>
        <a href="#" className="hover:text-[#8b7355] transition-colors">
          Docs
        </a>
      </nav>
    </header>
  );
};

export default Header;
