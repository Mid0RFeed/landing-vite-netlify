"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const data = [
  {
    id: "segezha",
    title: "Внутренние IT-сервисы для группы «Сегежа»",
    description:
      "Участие в создании и развитии внутренних приложений: постановка требований, работа с пользователями, приоритизация задач и контроль реализаций.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    id: "mts",
    title: "Цифровые продукты для телеком-отрасли (МТС)",
    description:
      "Проекты, связанные с клиентскими и внутренними сервисами: настройка процессов, работа с метриками, взаимодействие с разработкой и стейкхолдерами.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    id: "teboil",
    title: "Инструменты для работы с сетью АЗС (Тебойл)",
    description:
      "Участие в разработке инструментов для управления процессами и показателями сети автозаправочных станций, улучшение прозрачности и удобства работы.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    id: "nft",
    title: "Личный стартап: NFT-платформа",
    description:
      "Формулировка концепции, проработка пользовательских сценариев, взаимодействие с командой разработки и тестирование гипотез на рынке.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    id: "auto-analytics",
    title: "Сервис анализа показателей авто",
    description:
      "Проект по сбору и анализу данных об автомобилях: построение модели данных, интерфейсы для пользователей и визуализация показателей.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
  {
    id: "kids-projects",
    title: "Учебные проекты с подростками",
    description:
      "Небольшие сайты, игры и мини-приложения, которые ученики делают от идеи до результата, чтобы почувствовать, что IT - это живые работающие вещи.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
  },
];

const Gallery4 = ({
  title = "Опыт и кейсы",
  description = "IT-проекты и собственные стартапы.",
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              type="button"
              aria-label="Предыдущий кейс"
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </Button>
            <Button
              type="button"
              aria-label="Следующий кейс"
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 gap-5 px-5 2xl:px-[max(8rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-0 lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-lg">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-lg md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-3 md:mb-12 lg:mb-9">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm">
                        Подробнее{" "}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              type="button"
              key={index}
              className="flex h-8 w-8 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-primary/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
