import { Logo } from "../Logo";
import { ListMenu } from "./components/ListMenu";
import { FOOTER_MENU_OPTIONS, FOOTER_MENU_SOCIAL } from "./constants";

export const Footer = () => (
  <footer className="bg-blue">
    <div className="container flex items-center justify-between py-10">
      <Logo />
      <ListMenu links={FOOTER_MENU_SOCIAL} />
      <ListMenu links={FOOTER_MENU_OPTIONS} />
    </div>
  </footer>
);
