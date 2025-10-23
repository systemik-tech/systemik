import { NavItem } from "@/ui/layouts/header/nav-item";

const links = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const Nav = () => (
  <>
    <div className="hidden max-w-max flex-1 lg:flex">
      <div className="flex items-center justify-between gap-4">
        {links.map((link) => (
          <NavItem href={link.href} key={link.href} label={link.label} />
        ))}
      </div>
    </div>
  </>
);
