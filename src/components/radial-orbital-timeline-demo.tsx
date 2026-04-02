"use client";

import {
  Brain,
  Building2,
  Compass,
  Target,
  UserRound,
} from "lucide-react";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Индивидуальный подход",
    date: "01",
    content:
      "Формат, темп и примеры подстраиваются под конкретного человека или задачу, а не наоборот. Так обучение и проектная работа быстрее дают ощутимый результат.",
    category: "Approach",
    icon: UserRound,
    relatedIds: [3, 4],
    status: "completed" as const,
    energy: 96,
  },
  {
    id: 2,
    title: "Опыт в крупных компаниях",
    date: "02",
    content:
      "Опыт в Сегеже, МТС, Тебойл и собственных стартапах помогает опираться не на теорию, а на реальные продуктовые и операционные кейсы.",
    category: "Experience",
    icon: Building2,
    relatedIds: [4, 5],
    status: "completed" as const,
    energy: 93,
  },
  {
    id: 3,
    title: "Техника плюс педагогика",
    date: "03",
    content:
      "Сложные технические темы переводятся в понятные шаги, визуальные модели и практические задания, чтобы материал не просто слушали, а действительно усваивали.",
    category: "Teaching",
    icon: Brain,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 91,
  },
  {
    id: 4,
    title: "Фокус на результате",
    date: "04",
    content:
      "Работа строится вокруг измеримого итога: улучшения оценок, готового проекта, понятных метрик или запущенного продукта, а не вокруг абстрактного процесса.",
    category: "Outcome",
    icon: Target,
    relatedIds: [1, 2, 3, 5],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Структура и ясный маршрут",
    date: "05",
    content:
      "Каждая задача разбивается на понятные этапы с приоритетами и следующими шагами. Это снижает тревожность, ускоряет прогресс и делает движение к цели прозрачным.",
    category: "Clarity",
    icon: Compass,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <section className="relative w-full">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 pt-12 text-center sm:left-1/2 sm:-translate-x-1/2 sm:px-10">
        <h2 className="text-3xl font-medium text-white md:text-5xl">
          Преимущества работы со мной
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-white/70 md:text-base">
          В работе с детьми и бизнесом я соединяю практический опыт в IT,
          ясную структуру и человеческое объяснение сложных вещей. Нажми на
          узлы, чтобы посмотреть каждое из 5 преимуществ подробнее.
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
