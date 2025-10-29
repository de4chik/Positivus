import { Header } from "@/shared/header/header";
import { Cases } from "@/widgets/cases/cases";
import { Contact } from "@/widgets/contact/contact";
import { Hero } from "@/widgets/hero/hero";
import { OurWork } from "@/widgets/ourWork/ourWork";
import { Services } from "@/widgets/services/services";
import { Team } from "@/widgets/team/team";
import { Testimonials } from "@/widgets/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Cases />
      <OurWork />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
