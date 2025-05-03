import Navigation from "./navigation";
import Socials from "./socials";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center gap-12 md:items-start lg:flex-row lg:items-center lg:justify-between">
        <Logo />
        <Navigation />
      </div>
      <div className="mt-9 grid gap-y-14 md:grid-cols-2">
        <p className="text-center text-white/50 md:col-span-2 md:text-start lg:col-span-1">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="order-1 flex items-center justify-center md:justify-end lg:order-none lg:row-span-2">
          <Socials />
        </div>
        <small className="text-center text-white/50 md:text-start">
          Copyright 2025. All Rights Reserved
        </small>
      </div>
    </footer>
  );
}
