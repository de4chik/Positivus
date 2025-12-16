import { Container } from "@/shared/container/container";
import serviceStyles from "./service.module.css";
import { ServiceCard } from "@/shared/serviceCard/serviceCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Services = () => {
  return (
    <section id="services">
      <Container className={serviceStyles.container}>
        <div className={"container__top_title"}>
          <h2 className="titleSection">Services</h2>
          <p className={"container__top__description"}>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className={serviceStyles.services}>
          <ServiceCard
            color="gray"
            image="/images/img_1.png"
            title="Search engine optimization"
          />
          <ServiceCard
            color="green"
            image="/images/img_2.png"
            title="Search engine optimization"
          />
          <ServiceCard
            color="black"
            image="/images/img_3.png"
            title="Search engine optimization"
          />
          <ServiceCard
            color="gray"
            image="/images/img_4.png"
            title="Search engine optimization"
          />
          <ServiceCard
            color="green"
            image="/images/img_5.png"
            title="Search engine optimization"
          />
          <ServiceCard
            color="black"
            image="/images/img_6.png"
            title="Search engine optimization"
          />
        </div>
        <div className={serviceStyles.happen}>
          <div className={serviceStyles.happen_left}>
            <span className="text-3xl font-medium">
              Let’s make things happen
            </span>
            <p className="text-lg">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button>Get your free proposal</Button>
          </div>
          <Image
            src={"/images/happen_img.png"}
            alt=""
            width={500}
            height={400}
            className="absolute right-0 top-1/2 -translate-y-1/2 max-lg:w-64 max-md:hidden"
          />
        </div>
      </Container>
    </section>
  );
};
