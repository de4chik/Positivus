import { Accordion } from "@/shared/accordion/accordion";
import { Container } from "@/shared/container/container";

export const OurWork = () => {
  return (
    <section>
      <Container className="mt-[140px]">
        <div className={"container__top_title mb-20"}>
          <h2 className="titleSection">Our Working Process </h2>
          <p className={"container__top__description"}>
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="flex flex-col gap-[30px]">
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="01"
            title="Consultation"
          />
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="02"
            title="Research and Strategy Development"
          />
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="03"
            title="Implementation"
          />
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="04"
            title="Monitoring and Optimization"
          />
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="05"
            title="Reporting and Communication"
          />
          <Accordion
            content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            number="06"
            title="Continual Improvement"
          />
        </div>
      </Container>
    </section>
  );
};
