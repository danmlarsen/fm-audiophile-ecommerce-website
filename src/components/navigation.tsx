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
    title: 'Earphones',
    href: '/category/earphones',
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-8 uppercase font-bold text-[13px] tracking-[2px]">
        {navData.map(({ title, href }) => (
          <li key={title}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
