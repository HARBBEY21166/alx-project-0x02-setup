// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ALX Project
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:text-slate-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-slate-300 transition-colors">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-slate-300 transition-colors">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;