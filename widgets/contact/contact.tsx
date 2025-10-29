import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/shared/container/container";
import Image from "next/image";

export const Contact = () => {
  return (
    <section>
      <Container>
        <div className={"container__top_title pt-[140px] pb-[80px]"}>
          <h2 className="titleSection">Contact Us</h2>
          <p className={"container__top__description"}>
            Connect with Us: Let{"'"}s Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="pt-[60px] px-[100px] pb-20 max-md:pt-[30px] max-md:px-[25px] rounded-[45px] bg-[#F3F3F3] relative overflow-hidden">
          <RadioGroup
            defaultValue="say"
            defaultChecked
            className="flex gap-[35px]"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="say" id="say" />
              <Label htmlFor="say">Say Hi</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="get" id="get" />
              <Label htmlFor="get">Get a Quote</Label>
            </div>
          </RadioGroup>
          <form className="flex flex-col gap-[25px] mt-10 max-w-[556px]">
            <label>
              <span>Name</span>
              <Input placeholder="Name" className="w-full" />
            </label>
            <label>
              <span className="text-l">Email*</span>
              <Input placeholder="email" className="w-full" />
            </label>
            <label>
              <span className="text-l">Message*</span>
              <Textarea
                placeholder="message"
                className="w-full resize-none h-[190px]"
              />
            </label>
            <Button type="submit">Send Message</Button>
          </form>
          <Image
            src={"/images/contact_img.png"}
            alt=""
            width={700}
            height={650}
            className="absolute top-1/2 -translate-y-1/2 -right-1/2 -translate-x-2/5 max-lg:hidden"
          />
        </div>
      </Container>
    </section>
  );
};
