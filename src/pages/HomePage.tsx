import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Logos3Demo } from "@/components/logos3-demo";
import { RadialOrbitalTimelineDemo } from "@/components/radial-orbital-timeline-demo";
import { Gallery4Demo } from "@/components/gallery4-demo";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      <section id="hero">
        <HeroGeometric
          badge="Математика · Информатика · IT-проекты"
          title1="Хорошенков Егор"
          title2="репетитор и IT-наставник"
          subtitle="Помогаю школьникам 10-18 лет разобраться в математике и информатике, подготовиться к экзаменам и сделать первые собственные сайты и приложения."
          primaryCta={{ label: "Написать в Telegram", href: "https://t.me/Mango_Ice_Cream" }}
          secondaryCta={{ label: "Посмотреть кейсы", href: "#cases" }}
          stats={["ОГЭ и ЕГЭ", "Онлайн и вся Москва", "JS · Python · C# · Swift"]}
        />
      </section>
      <Logos3Demo />
      <ForWhomSection />
      <RadialOrbitalTimelineDemo />
      <ServicesSection />
      <section id="cases">
        <Gallery4Demo />
      </section>
      <EducationSection />
      <ContactSection />
    </>
  );
}
