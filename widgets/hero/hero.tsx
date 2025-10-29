"use client";
import { Container } from "@/shared/container/container";
import heroStyles from "./hero.module.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Companies } from "../../shared/companies/companies";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="hero" id="hero">
      <Container className={heroStyles.hero__container}>
        <div className={heroStyles.hero__content}>
          <motion.h1
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className={heroStyles.title}
          >
            Navigating the digital landscape for success
          </motion.h1>

          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className={heroStyles.description}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>
          <Button>Book a consultation</Button>
        </div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          className={heroStyles.image}
        >
          <Image
            src={"/images/hero_image.svg"}
            alt="image"
            width={600}
            height={515}
          />
        </motion.div>
      </Container>
      <Container>
        <Companies />
      </Container>
    </section>
  );
};
