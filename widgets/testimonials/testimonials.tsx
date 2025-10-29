"use client";
import { Star } from "@/shared/star/star";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Container } from "@/shared/container/container";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

  }, [api]);

  return (
    <section>
      <Container>
        <div className={"container__top_title pt-[140px] pb-[80px]"}>
          <h2 className="titleSection">Testimonials</h2>
          <p className={"container__top__description"}>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
        <div className="pt-[84px] pb-[64px] bg-[#191A23] rounded-[45px] text-white">
          <Carousel setApi={setApi} opts={{loop: true, startIndex: 1}}>
            <CarouselContent className=" max-w-[1240px] w-full">
              <CarouselItem className="max-w-[600px]">
                <div className="py-12 px-[52px] border border-[#B9FF66] rounded-[45px] text-lg">
                  We have been working with Positivus for the past year and have
                  seen a significant increase in website traffic and leads as a
                  result of their efforts. The team is professional, responsive,
                  and truly cares about the success of our business. We highly
                  recommend Positivus to any company looking to grow their
                  online presence.
                </div>
                <span className="text-lg text-[#B9FF66] block pl-20 mt-10">
                  John Smith
                </span>
                <span className="block pl-20">
                  Marketing Director at XYZ Corp
                </span>
              </CarouselItem>
              <CarouselItem className="max-w-[600px]">
                <div className="py-12 px-[52px] border border-[#B9FF66] rounded-[45px] text-lg">
                  We have been working with Positivus for the past year and have
                  seen a significant increase in website traffic and leads as a
                  result of their efforts. The team is professional, responsive,
                  and truly cares about the success of our business. We highly
                  recommend Positivus to any company looking to grow their
                  online presence.
                </div>
                <span className="text-lg text-[#B9FF66] block pl-20 mt-10">
                  John Smith
                </span>
                <span className="block pl-20">
                  Marketing Director at XYZ Corp
                </span>
              </CarouselItem>
              <CarouselItem className="max-w-[600px]">
                <div className="py-12 px-[52px] border border-[#B9FF66] rounded-[45px] text-lg">
                  We have been working with Positivus for the past year and have
                  seen a significant increase in website traffic and leads as a
                  result of their efforts. The team is professional, responsive,
                  and truly cares about the success of our business. We highly
                  recommend Positivus to any company looking to grow their
                  online presence.
                </div>
                <span className="text-lg text-[#B9FF66] block pl-20 mt-10">
                  John Smith
                </span>
                <span className="block pl-20">
                  Marketing Director at XYZ Corp
                </span>
              </CarouselItem>
            </CarouselContent>
            <div className="flex gap-5 justify-center mt-[124px]">
              {[...Array(count)].map((_, i) => (
                <Star key={i} fill={current == i + 1 ? "#B9FF66" : "white"} />
              ))}
            </div>
          </Carousel>
        </div>
      </Container>
    </section>
  );
};
