import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};

export default Header;