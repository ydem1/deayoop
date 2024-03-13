import { Link } from "react-router-dom";
import { Logo } from "../Logo";

const FOOTER_MENU_OPTIONS = [
  {
    label: 'Privacy Policy',
    url: '/',
  },
  {
    label: 'Contract-offer',
    url: '/',
  },
  {
    label: 'FAQ',
    url: '/',
  },
  {
    label: 'Payments',
    url: '/',
  },
  {
    label: 'Help',
    url: '/',
  },
  {
    label: 'Feedback',
    url: '/',
  },
  {
    label: 'Safety rules',
    url: '/',
  },
];

const STYLE_LINK = 'text-darkBlue text-sm font-semibold hover:scale-105 duration-300';

export const Footer = () => (
  <footer className="bg-blue">
    <div className="container flex items-center justify-between py-10">
      <Logo />

      <div className="flex gap-3">
        <a className={STYLE_LINK} href="mailto:support@dealyoop.com">support@dealyoop.com</a>
        <a className={STYLE_LINK} href="tel:+4255053804">(425) 505-3804</a>
      </div>

      <ul className="flex gap-3">
        {FOOTER_MENU_OPTIONS.map(({ label, url }) => (
          <li key={label}>
            <Link
              className={STYLE_LINK}
              to={url}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
