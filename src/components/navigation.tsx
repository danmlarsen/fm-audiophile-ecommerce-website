import { cn } from "@/lib/utils";
import Link from "next/link";

const navData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Headphones",
    href: "/headphones",
  },
  {
    title: "Speakers",
    href: "/speakers",
  },
  {
    title: "Earphones",
    href: "/earphones",
  },
];

export default function Navigation({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav className={cn("", className)} {...props}>
      <ul className="flex flex-col items-center gap-8 text-[13px] font-bold tracking-[2px] uppercase md:flex-row">
        {navData.map(({ title, href }) => (
          <li key={title}>
            <Link
              href={href}
              className="hover:text-primary transition-colors duration-300"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
