import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import headerStyles from "./header.module.css";
import Link from "next/link";

export const HeaderSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className={headerStyles.header__burger}>
        <div className={headerStyles.header__burger__item}></div>
        <div className={headerStyles.header__burger__item}></div>
      </SheetTrigger>
      <SheetContent className="fixed inset-y-0 right-0 w-3/4 h-[100dvh] bg-white">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="pl-4">
          <ul className={headerStyles.header__sheet__menu}>
            <li>
              <Link href={"#about"}>About us</Link>
            </li>
            <li>
              <Link href={"#services"}>Services</Link>
            </li>
            <li>
              <Link href={"#cases"}>Use Cases</Link>
            </li>
            <li>
              <Link href={"#pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"#blog"}>Blog</Link>
            </li>
            <li>
              <Button variant={"outline"}>Request a quote</Button>
            </li>
          </ul>
        </nav>
        <SheetFooter>
          <Button variant={"outline"}>Request a quote</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
