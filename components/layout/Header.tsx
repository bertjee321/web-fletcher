import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <header className="border-b border-[#d3c9b4] bg-[#faf7f1] px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif tracking-wide text-[#3f3a2f]">
          <a href="/">🏹 Web Fletcher</a>
        </h1>
        <p>Fletch your own web designs with AI precision.</p>

        <nav className="space-x-6 text-sm">
          <a
            href="/auth/signin"
            className="hover:text-[#8b7355] transition-colors"
          >
            Login
          </a>
          <a href="/docs" className="hover:text-[#8b7355] transition-colors">
            Docs
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header className="border-b border-[#d3c9b4] bg-[#faf7f1] px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-serif tracking-wide text-[#3f3a2f]">
        <a href="/">🏹 Web Fletcher</a>
      </h1>
      <p>Fletch your own web designs with AI precision.</p>

      <nav className="space-x-6 text-sm">
        <a
          href="/sessions/new"
          className="hover:text-[#8b7355] transition-colors"
        >
          New
        </a>
        <a href="/sessions" className="hover:text-[#8b7355] transition-colors">
          Sessions
        </a>
        <a href="/docs" className="hover:text-[#8b7355] transition-colors">
          Docs
        </a>
        <a
          href="/auth/signout"
          className="hover:text-[#8b7355] transition-colors"
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
