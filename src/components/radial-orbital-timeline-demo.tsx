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
    title: "Объяснение без давления",
    date: "01",
    content:
      "Темп, примеры и формат подстраиваются под ученика. Задача - не напугать темой, а спокойно разложить ее на понятные шаги.",
    category: "Approach",
    icon: UserRound,
    relatedIds: [3, 4],
    status: "completed" as const,
    energy: 96,
  },
  {
    id: 2,
    title: "Реальный IT-опыт",
    date: "02",
    content:
      "Опыт в Shell, МТС, Сегеже, Teboil и собственных проектах помогает объяснять информатику через реальные продукты, а не только через учебник.",
    category: "Experience",
    icon: Building2,
    relatedIds: [4, 5],
    status: "completed" as const,
    energy: 93,
  },
  {
    id: 3,
    title: "Теория через практику",
    date: "03",
    content:
      "Сложные темы превращаются в задачи, визуальные модели и небольшие проекты, чтобы материал не просто слушали, а действительно применяли.",
    category: "Teaching",
    icon: Brain,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 91,
  },
  {
    id: 4,
    title: "Подготовка по плану",
    date: "04",
    content:
      "Для ОГЭ, ЕГЭ, школьных и вступительных задач важен маршрут: что уже получается, что мешает и какой следующий шаг даст прогресс.",
    category: "Outcome",
    icon: Target,
    relatedIds: [1, 2, 3, 5],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 5,
    title: "Проекты учеников",
    date: "05",
    content:
      "Ученики создают сайты и приложения для себя или малого бизнеса. Это помогает увидеть, зачем нужна информатика и программирование.",
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
          Почему обучение становится понятнее
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-white/70 md:text-base">
          Соединяю дружелюбное наставничество, подготовку к экзаменам и
          практический IT-опыт. Нажми на узлы, чтобы посмотреть каждое
          преимущество подробнее.
        </p>
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
