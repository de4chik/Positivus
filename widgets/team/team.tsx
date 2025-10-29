import { Button } from "@/components/ui/button";
import { Container } from "@/shared/container/container";
import { TeamCard } from "@/shared/teamCard/teamCard";

export const Team = () => {
  return (
    <section>
      <Container>
        <div className={"container__top_title pt-[140px] pb-[80px]"}>
          <h2 className="titleSection">Team</h2>
          <p className={"container__top__description"}>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          <TeamCard
            name="John Smith"
            job="CEO and Founder"
            content="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          />
          <TeamCard
            name="Jane Doe"
            job="Director of Operations"
            content="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          />
          <TeamCard
            name="Michael Brown"
            job="Senior SEO Specialist"
            content="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          />
          <TeamCard
            name="Emily Johnson"
            job="PPC Manager"
            content="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          />
          <TeamCard
            name="Brian Williams"
            job="Social Media Specialist"
            content="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          />
          <TeamCard
            name="Sarah Kim"
            job="Content Creator"
            content="2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
          />
        </div>

        <div className="flex justify-end pt-10">
          <Button className="px-[76px] max-md:w-full">See all team</Button>
        </div>
      </Container>
    </section>
  );
};
