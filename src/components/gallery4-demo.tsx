import { Gallery4, type Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  title: "Кейсы и проекты",
  description:
    "Профессиональные IT-кейсы, собственные продукты и учебные проекты, где теория превращается в работающий результат.",
  items: [
    {
      id: "segezha",
      title: "Сегежа Групп: сайт домостроения",
      description:
        "2022, 4 месяца, команда 2 человека. Сайт вышел в топ по запросам, увеличил количество лидов и снял часть нагрузки по справочным вопросам.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "mts",
      title: "МТС: умная техника",
      description:
        "2021, 6 месяцев. Приложение для управления умной техникой через Wi-Fi и Bluetooth.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "shell",
      title: "Shell: KPI-трекер",
      description:
        "2020, 3 месяца, команда 3 человека. Android-приложение упростило работу с KPI и мотивацией сотрудников.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "teboil",
      title: "Teboil: мобильные оплаты",
      description:
        "2025. Проектное управление мобильными оплатами в приложении Teboil и QR-чаевыми.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "nft",
      title: "NFT-аналитик портфеля",
      description:
        "2022, 6 месяцев. Сайт для анализа и прогнозирования NFT-цен, тестовые портфели выросли на 20-100%.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "auto",
      title: "Автоаналитика в реальном времени",
      description:
        "2023, 6 месяцев, команда 2 человека. Приложение передает данные авто на сайт и показывает ошибки и аномальные показатели.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
    {
      id: "edu",
      title: "Учебные проекты с подростками",
      description:
        "Сайты и приложения, которые ученики создавали для себя или малого бизнеса.",
      href: "#cases",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export { Gallery4Demo };
