import { Container } from "@/shared/container/container";
import { ArrowUpRight } from "lucide-react";

export const Cases = () => {
  return (
    <section id="cases">
      <Container className="pt-[140px]">
        <div className={"container__top_title"}>
          <h2 className="titleSection">Case Studies</h2>
          <p className={"container__top__description"}>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="px-[60px] py-[70px] bg-[#191A23] rounded-[45px] grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-10 max-md:px-[30px] max-md:py-[35px] mt-20">
          <div className="border-r pr-[64px] max-lg:border-b max-lg:border-r-0 max-lg:px-0 max-lg:pb-5">
            <p className="text-white">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="relative after:content-['Learn_more']  after:absolute after:top-1/2 after:left-8 after:-translate-y-1/2 after:text-[#B9FF66] after:font mt-5">
              <ArrowUpRight className="stroke-[#B9FF66]" />
            </div>
          </div>
          <div className="border-r px-[64px] max-lg:border-b max-lg:border-r-0  max-lg:px-0 max-lg:pb-5">
            <p className="text-white">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="relative after:content-['Learn_more']  after:absolute after:top-1/2 after:left-8 after:-translate-y-1/2 after:text-[#B9FF66] after:font mt-5">
              <ArrowUpRight className="stroke-[#B9FF66]" />
            </div>
          </div>
          <div className="pl-[64px] max-lg:border-0 max-lg:p-0">
            <p className="text-white">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="relative after:content-['Learn_more']  after:absolute after:top-1/2 after:left-8 after:-translate-y-1/2 after:text-[#B9FF66] after:font mt-5">
              <ArrowUpRight className="stroke-[#B9FF66]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
