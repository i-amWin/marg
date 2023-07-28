import { Link } from "react-router-dom";
import { type IconType } from "react-icons";

import {
  BsPerson,
  BsBandaid,
  BsQuestionCircle,
  BsGear,
  BsBell,
  BsKeyboard,
} from "react-icons/bs";
import { RiHistoryFill } from "react-icons/ri";

import Logo from "./../assets/margbooks.svg";
import MobileLogo from "./../assets/m-logo.svg";

interface IAccessibilityLink {
  name: string;
  icon: IconType;
  to: string;
  className?: string;
}

const accessibilityLinks: IAccessibilityLink[] = [
  {
    name: "Drug Helpline",
    icon: BsBandaid,
    to: "/",
    className: "hidden lg:inline-block",
  },
  {
    name: "Help",
    icon: BsQuestionCircle,
    to: "/",
    className: "hidden lg:inline-block",
  },
  {
    name: "Settings",
    icon: BsGear,
    to: "/",
  },
  {
    name: "Notification",
    icon: BsBell,
    to: "/",
  },
  {
    name: "Shortcut",
    icon: BsKeyboard,
    to: "/",
    className: "hidden lg:inline-block",
  },
  {
    name: "History",
    icon: RiHistoryFill,
    to: "/",
    className: "hidden lg:inline-block",
  },
];

export default function Header() {
  return (
    <header className="flex bg-blue-600 py-2">
      <div className="flex flex-grow px-4 gap-4 items-center">
        <div className="bg-white">
          <img
            src={Logo}
            alt="MargBooks"
            className="hidden lg:inline-block h-10"
          />
          <img
            src={MobileLogo}
            alt="MargBooks"
            className="lg:hidden h-10 p-2"
          />
        </div>
        <div className="hidden lg:inline-block">
          <p className="font-semibold">Chemist Demo Pvt Ltd (CDPL)</p>
          <p className="text-xs">Books From 01-04-2021 to 31-03-2022</p>
        </div>
        <div className="ml-auto">
          <Link to="/">
            <BsPerson
              size={30}
              className="fill-slate-600 bg-gray-200 rounded-full p-1"
            />
          </Link>
        </div>
      </div>
      <div className="px-4 border-l">
        <ul className="flex gap-2">
          {accessibilityLinks.map((link) => (
            <AccessibilityLink key={link.name} {...link} />
          ))}
        </ul>
      </div>
    </header>
  );
}

function AccessibilityLink({
  name,
  icon: Icon,
  to,
  className,
}: IAccessibilityLink) {
  return (
    <li className={className}>
      <Link to={to} className={`flex flex-col items-center`} title={name}>
        <Icon size={18} />
        <p className="text-sm">{name}</p>
      </Link>
    </li>
  );
}
