import Link from 'next/link';

const navData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Headphones',
    href: '/category/headphones',
  },
  {
    title: 'Speakers',
    href: '/category/speakers',
  },
  {
    title: 'Home',
    href: '/category/earphones',
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-8 uppercase font-bold text-sm tracking-wide">
        {navData.map(({ title, href }) => (
          <li key={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
