import { Logo } from "../Logo";

import { DEFAULT_CLASSNAME_FOOTER_LINK, FOOTER_MENU_OPTIONS } from "./constants";
import { LinkItem } from "./LinkItem";

export const Footer = () => (
  <footer className="bg-blue">
    <div className="container flex items-center justify-between py-10">
      <Logo />

      <div className="flex gap-3">
        <a className={DEFAULT_CLASSNAME_FOOTER_LINK} href="mailto:support@dealyoop.com">support@dealyoop.com</a>
        <a className={DEFAULT_CLASSNAME_FOOTER_LINK} href="tel:+4255053804">(425) 505-3804</a>
      </div>

      <ul className="flex gap-3">
        {FOOTER_MENU_OPTIONS.map(({ label, url }) => (
          <li key={`${label}: ${url}`}>
            <LinkItem label={label} url={url} />
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
