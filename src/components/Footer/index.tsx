import { Logo } from "../Logo";
import { FOOTER_MENU_OPTIONS, FOOTER_MENU_SOCIAL } from "./constants";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => (
  <footer className="bg-blue">
    <div className="container flex items-center justify-between py-10">
      <Logo />
      <FooterLinks links={FOOTER_MENU_SOCIAL} />
      <FooterLinks links={FOOTER_MENU_OPTIONS} />
    </div>
  </footer>
);
