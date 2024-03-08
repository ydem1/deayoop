import { Link } from "react-router-dom";
import { Logo } from "../logo";

export const Footer = () => {
  const styleLink = 'text-darkBlue text-sm font-semibold hover:scale-105 duration-300';

  return (
    <footer className="bg-blue">
      <div className="container flex items-center justify-between py-10">
        <Logo />

        <div className="flex gap-3">
          <a className={styleLink} href="mailto:support@dealyoop.com">support@dealyoop.com</a>
          <a className={styleLink} href="tel:+4255053804">(425) 505-3804</a>
        </div>

        <div className="flex gap-3">
          <Link
            className={styleLink}
            to="/"
          >
            Privacy Policy
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            Contract-offer
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            FAQ
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            Payments
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            Help
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            Feedback
          </Link>

          <Link
            className={styleLink}
            to="/"
          >
            Safety rules
          </Link>
        </div>
      </div>
    </footer>
  )
};
