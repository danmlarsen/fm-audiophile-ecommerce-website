import Navigation from "./navigation";
import Socials from "./socials";
import Logo from "./ui/logo";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between">
        <Logo />
        <Navigation />
      </div>
      <div className="mt-9 grid grid-cols-2 gap-y-14">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="row-span-2 flex items-center justify-end">
          <Socials />
        </div>
        <small>Copyright 2025. All Rights Reserved</small>
      </div>
    </footer>
  );
}
