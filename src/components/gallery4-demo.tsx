import { Gallery4, type Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  title: "IT-проекты и собственные стартапы",
  description:
    "За последние годы я участвовал в разработке более 10 приложений и веб-сервисов для крупных компаний, а также запускал собственные проекты.",
  items: [
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
      title: "Цифровые продукты для телеком-отрасли",
      description:
        "Проекты, связанные с клиентскими и внутренними сервисами: настройка процессов, работа с метриками, взаимодействие с разработкой и стейкхолдерами.",
      href: "#portfolio",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "teboil",
      title: "Инструменты для работы с сетью АЗС",
      description:
        "Разработка инструментов для управления процессами и показателями сети автозаправочных станций, улучшение прозрачности и удобства работы.",
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
      id: "auto",
      title: "Сервис анализа показателей авто",
      description:
        "Сбор и анализ данных об автомобилях: построение модели данных, интерфейсы для пользователей и визуализация показателей.",
      href: "#portfolio",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "edu",
      title: "Учебные проекты с подростками",
      description:
        "Небольшие сайты, игры и мини-приложения, которые ученики делают от идеи до результата, чтобы увидеть практику IT.",
      href: "#portfolio",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
