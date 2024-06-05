"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  title: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { title: "Inicio", url: "/" },
  { title: "Código", url: "/code" },
];

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  return (
    <Navbar
      isBordered
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-4",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
        menuItem: [
          "flex",
          "relative",
          "pb-4",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-2",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent justify="center">
        <NavbarBrand className="gap-1 flex items-end">
          <Image src="/logo.webp" alt="logo" width="40" height="40" />
          <h1 className={`text-foreground text-2xl`}>CHESS MODEL</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex uppercase">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.url === currentPath}
          >
            <Link href={item.url} className=" text-foreground">
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.url === currentPath}
          >
            <Link className="w-full text-foreground" href={item.url}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MainNavbar;
