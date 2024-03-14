import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { ROUTES } from "constants/routes";

const FOOTER_MENU_OPTIONS = [
  {
    label: 'Privacy Policy',
    url: ROUTES.home,
  },
  {
    label: 'Contract-offer',
    url: ROUTES.home,
  },
  {
    label: 'FAQ',
    url: ROUTES.home,
  },
  {
    label: 'Payments',
    url: ROUTES.home,
  },
  {
    label: 'Help',
    url: ROUTES.home,
  },
  {
    label: 'Feedback',
    url: ROUTES.home,
  },
  {
    label: 'Safety rules',
    url: ROUTES.home,
  },
];

const STYLE_LINK = 'text-darkBlue text-sm font-semibold';

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
