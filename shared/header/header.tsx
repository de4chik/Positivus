// import { Container } from "../container/container";
import headerStyles from "./header.module.css";

import { Container } from "../container/container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeaderSheet } from "./headerSheet";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Container className={headerStyles.header__container}>
        <Image
          src={"/images/logo_positivus.svg"}
          alt="logo_positivus"
          width={220}
          height={56}
        />

        <nav className={headerStyles.header__navigation}>
          <ul className={headerStyles.header__navMenu}>
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
        <HeaderSheet />
      </Container>
    </header>
  );
};
